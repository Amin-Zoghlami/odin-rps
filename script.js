function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    
    switch (randomNum) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors.").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    game.textContent = "";
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    result.textContent = "It's a draw! Rock ties with Rock";
                break;
                
                case "paper":
                    result.textContent = "You lose! Paper beats Rock";
                    engineText.textContent = ++computerScore;
                    if (computerScore == 5) {
                        game.textContent = "You lose!";
                        humanScore = 0;
                        computerScore = 0;
                        playerText.textContent = humanScore;
                        engineText.textContent = computerScore;
                    }
                break;
                
                case "scissors":
                    result.textContent = "You win! Rock beats Scissors";
                    playerText.textContent = ++humanScore;
                    if (humanScore == 5) {
                        game.textContent = "You win!";
                        humanScore = 0;
                        computerScore = 0;
                        playerText.textContent = humanScore;
                        engineText.textContent = computerScore;
                    }
                break;
            }
        break;
        
        case "paper":
            switch (computerChoice) {
                case "rock":
                    result.textContent = "You win! Paper beats Rock";
                    playerText.textContent = ++humanScore;
                    if (humanScore == 5) {
                        game.textContent = "You win!";
                        humanScore = 0;
                        computerScore = 0;
                        playerText.textContent = humanScore;
                        engineText.textContent = computerScore;
                    }
                break;
                
                case "paper":
                    result.textContent = "It's a draw! Paper ties with Paper";
                break;
                
                case "scissors":
                    result.textContent = "You lose! Scissors beats Paper";
                    engineText.textContent = ++computerScore;
                    if (computerScore == 5) {
                        game.textContent = "You lose!";
                        humanScore= 0;
                        computerScore = 0;
                        playerText.textContent = humanScore;
                        engineText.textContent = computerScore;
                    } 
                break;
            }
        break;
        
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    result.textContent = "You lose! Rock beats Scissors";
                    engineText.textContent = ++computerScore;
                    if (computerScore == 5) {
                        game.textContent = "You lose!";
                        humanScore = 0;
                        computerScore = 0;
                        playerText.textContent = humanScore;
                        engineText.textContent = computerScore;
                    }
                break;
                
                case "paper":
                    result.textContent = "You win! Scissors beats Paper";
                    playerText.textContent = ++humanScore;
                    if (humanScore == 5) {
                        game.textContent = "You win!";
                        humanScore = 0;
                        computerScore = 0;
                        playerText.textContent = humanScore;
                        engineText.textContent = computerScore;
                    }
                break;
                
                case "scissors":
                    result.textContent = "It's a draw! Scissors ties with Scissors";
                break;
            }
        break;
    }
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
  
const playerText = document.querySelector(".playerText");
const engineText = document.querySelector(".engineText");
const result = document.querySelector(".result");
const game = document.querySelector(".game p");
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
