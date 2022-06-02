$(".play").click(function () {
  let userChoice = $(".input").val();
  let computerChoice = getRandomComputerChoice();
  $(".computerChoice").text(computerChoice);
  $(".userChoice").text(userChoice);
  chooseWinner(computerChoice, userChoice);
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

//let userChoice = $(".input").val();
//let computerChoice = getRandomComputerChoice();
//$(".computerChoice").text(computerChoice);
//$(".userChoice").text(userChoice);
function chooseWinner(computerChoice, userChoice) {
  if (userChoice === "rock" && computerChoice === "scissors") {
    $(".result").text("Rock beats Scissors!");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    $(".result").text("Paper covers Rock!");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    $(".result").text("Scissors cuts Paper!");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    $(".result").text("Paper covers Rock!");
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    $(".result").text("Paper covers Scissors!");
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    $(".result").text("Rock beats Scissors!");
  } else if (userChoice === "rock" && computerChoice === "rock") {
    $(".result").text("Tie! Rock versus Rock");
  } else if (userChoice === "paper" && computerChoice === "paper") {
    $(".result").text("Tie! Paper versus Paper");
  } else if (userChoice === "scissors" && computerChoice === "scissors") {
    $(".result").text("Tie! Scissors versus Scissors");
  }
}
