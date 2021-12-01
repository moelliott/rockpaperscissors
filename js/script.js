$('.play').click(function(){

  let shootValue = $('.input').val() 
  let userChoice;
  let computerChoice;
  let randomNumber;
  let choices = Math.ceil(Math.random() * 6);
  $(".userChoice").text(shootValue)
  
  $(".computerChoice").text(shootValue)
  if(randomNumber === 1) {
	computerChoice = 'rock';
    $(".message").text("nice try");
  }
  if(randomNumber === 2) {
	computerChoice = 'paper';
  }
  if (randomNumber === 3) {
	computerChoice = 'scissors';
  }
  if (randomNumber === 4) {
	userChoice = 'rock';
  }
  if(randomNumber === 5) {
	userChoice = 'paper';
  }
  if(randomNumber === 6) {
	userChoice = 'scissors';
  }
})

