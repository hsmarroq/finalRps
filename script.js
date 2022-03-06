"use strict";

// Global Vars
let humanScore = 0;
let compScore = 0;
let humanChoices;
let humanAttempts;

// Variable shortcuts
let humanScoreText = document.querySelector("#human-score");
const compScoreText = document.querySelector("#computer-score");
const liveComments = document.querySelector("#live-comments");
const rock = document.querySelector("#rock"); // rock pic
const paper = document.querySelector("#paper"); // paper pic
const scissors = document.querySelector("#scissors"); // scissors pic

// Hidden Reset
let commentsHidden = document.querySelector("#score-comments"); // Comments
commentsHidden.classList.remove("hidden"); // Comments Hidden
let weaponsHidden = document.querySelector(".weapon-divs"); // Weapons
weaponsHidden.classList.remove("hidden"); // Weapons Hidden
let resetBtn = document.querySelector(".outer-reset-btn "); // Reset Button

// Computer Logic
const compLogic = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomNum = Math.trunc(Math.random() * choices.length);
  return choices[randomNum];
};

compLogic();

const hiddenElements = () => {
  resetBtn.classList.remove("hidden");
  commentsHidden.classList.add("hidden");
  weaponsHidden.classList.add("hidden");
};

liveComments.classList.add("hidden");

const playGame = () => {
  // Game Rules
  if (
    (humanChoices[humanAttempts] === "rock" && compLogic() === "scissors") ||
    (humanChoices[humanAttempts] === "paper" && compLogic() === "rock") ||
    (humanChoices[humanAttempts] === "scissors" && compLogic() == "paper")
  ) {
    humanScore++;
    humanScoreText.textContent = `Human Score: ${humanScore}`;
    liveComments.textContent = `YAY, a point for you!`;
  } else if (humanChoices[humanAttempts] == compLogic()) {
    liveComments.textContent = `IT'S A TIE!`;
  } else {
    compScore++;
    compScoreText.textContent = `Comp Score: ${compScore}`;
    liveComments.textContent = `A point for the Computer :(`;
  }

  // Detect if game over
  const gameOver = () => {
    if (humanScore == 5 || compScore == 5) {
      resetBtn.classList.remove("hidden");
      commentsHidden.classList.add("hidden");
      weaponsHidden.classList.add("hidden");
    }
  };

  gameOver();
};

// Human Choices Saved
humanChoices = [];
humanAttempts = -1;

// Clickers //
// Rock
const rockClicked = rock.addEventListener("click", () => {
  humanChoices.push("rock");
  humanAttempts++;
  //console.log(humanChoices[humanAttempts]);
  playGame();
});

// Paper
const paperClicked = paper.addEventListener("click", () => {
  humanChoices.push("paper");
  humanAttempts++;
  //console.log(humanChoices[humanAttempts]);
  playGame();
});

// Scissors
const scissorsClicked = scissors.addEventListener("click", () => {
  humanChoices.push("scissors");
  humanAttempts++;
  //console.log(humanChoices[humanAttempts]);
  playGame();
});
