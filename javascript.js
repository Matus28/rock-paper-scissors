//Build function computerPlay, which will be used to make random selection (r/p/s) for computer.
//Add computer selection to variable computerSelection.

function computerPlay() {
  return choice[Math.floor(Math.random()*choice.length)]
}

//Make function playRound for playing one round of rock/paper/scissors, use input parameters
//playerSelection, computerSelection.

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "Rock") && (computerSelection === "Paper")){
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    lose += 1;
  } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    win += 1;
  } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    win += 1;
  } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    lose += 1;
  } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    win += 1;
  } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    lose += 1;
  } else if (playerSelection == computerSelection) {
    console.log(`Draw! You both have used ${playerSelection}.`)
  }
}

//Function caseSensitive to make input from user case sensitive, first letter must be Capital, 
//rest lower.

function caseSensitive(str) {
  let corrected = '';
  for (let i=0; i<=str.length-1; i++) {
    if(i===0) {
      corrected += str[i].toUpperCase();
    } else {
      corrected += str[i].toLowerCase();
    }
  }
  return corrected;
}

//Create function game() for repeating playRound function, that player can play 5 rounds.
//Write down the result of game.

function game() {
  while ((win < 5) && (lose < 5)) {
    if ((playerSelection === "Rock") || (playerSelection === "Paper") || (playerSelection === "Scissors")) {
      playRound(playerSelection, computerSelection);
      if (win === 5 && lose < 5) {
        console.log("--------------------------");
        console.log("You won aginst computer. Congratulation.");
        console.log(`Player: ${win}, Computer: ${lose}`);
        console.log("--------------------------");
        return;
      } else if (lose === 5 && win < 5) {
        console.log("--------------------------");
        console.log("Game over. You lost against computer.");
        console.log(`Player: ${win}, Computer: ${lose}`);
        console.log("--------------------------");
        return;
      }
      playerSelection = caseSensitive(prompt("Choose between: Paper, Rock, Scissors"));
      computerSelection = computerPlay();
    } else {
      playerSelection = caseSensitive(prompt("Wrong input! Choose between: Paper, Rock, Scissors"));
    
    }
  }
}

//Declaration of variables, inputs: playerSelection, computerSelection
//Prompt user to insert his choice (rock/paper/scissors), transport input to be case sensitive.

const choice = ["Rock", "Paper", "Scissors"];
let playerSelection = caseSensitive(prompt("Choose between: Paper, Rock, Scissors"));
let computerSelection = computerPlay();
let win = 0;
let lose = 0;

game();



