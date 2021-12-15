$(".play").click(function() {
  let userChoice = $(".input").val();

  $(".userChoice").text(userChoice);
  let randomNumber = Math.ceil(Math.random() * 3);
  let computerChoice = randomNumber;

  if (randomNumber === 2) {
    computerChoice = "rock";
    $(".result").text("Good job!");
  } else if (randomNumber === 3) {
    computerChoice = "paper";
    $(".result").text("You won!");
  } else if (randomNumber === 1) {
    computerChoice = "scissors";
    $(".result").text("Winner!");
  }
  $(".computerChoice").text(computerChoice);
});
