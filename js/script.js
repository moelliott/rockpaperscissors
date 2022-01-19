$(".play").click(function () {
  let userChoice = $(".input").val();

  $(".userChoice").text(userChoice);
  let computerChoice = getRandomComputerChoice();
  $(".computerChoice").text(computerChoice);

  
});

function getRandomComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3);
  let computerChoice = randomNumber;
  if (randomNumber === 2) {
    computerChoice = "rock";
  } else if (randomNumber === 3) {
    computerChoice = "paper";
  } else if (randomNumber === 1) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function chooseWinner() {
  
  if (computerChoice === "scissors" && userChoice === "rock") {
    $(".result").text("Rock beats Scissors!");
  } else if (computerChoice === "rock" && userChoice === "paper") {
    $(".result").text("Paper covers Rock!");
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    $(".result").text("Scissors cuts Paper!");
  } else if (computerChoice === "paper" && userChoice === "rock") {
    $(".result").text("Paper covers Rock!");
  } else if (computerChoice === "rock" && userChoice === "paper") {
    $(".result").text("Paper covers Rock!");
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    $(".result").text("Rock beats Scissors!");
  } else if (computerChoice === "rock" && userChoice === "rock") {
    $(".result").text("Tie! Rock v Rock");
  } else if (computerChoice === "paper" && userChoice === "paper") {
    $(".result").text("Tie! Paper v Paper");
  } else if (computerChoice === "scissors" && userChoice === "scissors") {
    $(".result").text("Tie! Scissors v Scissors");
  }
}