$('.play').click(function(){

  let shootValue = $('.input').val() 
  let computerChoice;
  let randomNumber;
  
  $(".userChoice").text(shootValue)
  
  $(".computerChoice").text(shootValue)
  if(randomNumber === 1) {
	computerChoice = 'rock';
}

if(randomNumber === 2) {
	computerChoice = 'paper';
}

if(randomNumber === 3) {
	computerChoice = 'scissors';
}
})
