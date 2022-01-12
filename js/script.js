$(".play").click(function () {
  let userChoice = $(".input").val();

  $(".userChoice").text(userChoice);
  let randomNumber = Math.ceil(Math.random() * 3);
  let computerChoice = randomNumber;
  if (randomNumber === 2) {
    computerChoice = "rock";
    
  } else if (randomNumber === 3) {
    computerChoice = "paper";
    
  } else if (randomNumber === 1) {
    computerChoice = "scissors";
    
  }
  $(".computerChoice").text(computerChoice);

  if (computerChoice === "scissors" && userChoice === "rock") {


  }