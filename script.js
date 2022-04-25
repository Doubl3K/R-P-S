// Returns Rock-Paper-Scissor randomly through an RNG
function computerPlay(){
  let ainum = Math.floor(Math.random()*3+1);
  if (ainum == 1 ) {
    computerSelection = "rock";
  }
  if (ainum == 2 ) {
    computerSelection = "scissors"
  }
  if (ainum == 3 ) {
    computerSelection = "paper"
  }
  return computerSelection
}

function pastRounds(roundWinner){
  const container = document.querySelector(".score-history");

  const content = document.createElement("div");
  content.classList.add("content");

  if(roundWinner == "playerwins"){
    content.style.backgroundColor = "green";
    content.textContent = "Player Wins!";
  }
  if(roundWinner == "computerwins"){
    content.style.backgroundColor = "red";
    content.textContent = "Computer Wins!";
  }
  if(roundWinner == "draw"){
    content.style.backgroundColor = "darkgrey";
    content.textContent = "Draw";
  }
  container.appendChild(content);
}

//Tells which button has been pressed
function buttonPress(){
  const rbutton = document.getElementById("rockButton");
  rbutton.addEventListener("click", function(){play("rock")});
  const pbutton = document.getElementById("paperButton");
  pbutton.addEventListener("click", function(){play("paper")});
  const sbutton = document.getElementById("scissorButton");
  scissorButton.addEventListener("click", function(){play("scissors")});
  }

  //A whole bunch of if statements to compare who won a round
  function play(playerSelection){
    let roundWinner;
    computerSelection = computerPlay();
    //Draw
    if(computerSelection == playerSelection){
      roundWinner = "draw";
    }
    //Computer winns
    if (computerSelection == "paper" && playerSelection == "rock") {
      capitalize(computerSelection, playerSelection);
      roundWinner = "computerwins";
    }
    if (computerSelection == "rock" && playerSelection == "scissors") {
      capitalize(computerSelection, playerSelection);
      roundWinner = "computerwins";
    }
    if (computerSelection == "scissors" && playerSelection == "paper") {
      capitalize(computerSelection, playerSelection);
      roundWinner = "computerwins";
    }
    // Player wins
    if (computerSelection == "rock" && playerSelection == "paper") {
      capitalize(computerSelection, playerSelection);
      roundWinner = "playerwins";
    }
    if (computerSelection == "scissors" && playerSelection == "rock") {
      capitalize(computerSelection, playerSelection);
      roundWinner = "playerwins";
    }
    if (computerSelection == "paper" && playerSelection == "scissors") {
      capitalize(computerSelection, playerSelection);
      roundWinner = "playerwins";
    }
    pastRounds(roundWinner);
    game(roundWinner);
  }

  //Capitalizing
  function capitalize(computerSelection, playerSelection){
    computerSelection = computerSelection.charAt(0).toLocaleUpperCase() + computerSelection.slice(1, computerSelection.length);
    playerSelection = playerSelection.charAt(0).toLocaleUpperCase() + playerSelection.slice(1, playerSelection.length);
    return playerSelection;
  }

  //5 rounds of play() that logs the overall winner
  function game(roundWinner){

    if (roundWinner == "draw") {
      return;
    }
    if (pwin < 3 && cwin < 3) {
      if (roundWinner == "computerwins") {
        cwin++;
        const container1 = document.querySelector("#playerScore");
        container1.textContent = cwin;
      }
      if (roundWinner == "playerwins") {
        pwin++;
        const container2 = document.querySelector("#computerScore");
        container2.textContent = pwin;
      }
    }
    if (pwin == 3) {
      alert("Congratulations you Won! Hit F5 to play again!")
    }
    if (cwin == 3){
      alert("Sorry you lost! Hit F5 to play again!");
    }
  }

let cwin = 0;
let pwin = 0;
buttonPress();
