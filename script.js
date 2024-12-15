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
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("It's a draw! Rock ties with Rock");
                    humanScore++;
                    computerScore++;
                break;
                
                case "paper":
                    console.log("You lose! Paper beats Rock");
                    computerScore++;
                break;
                
                case "scissors":
                    console.log("You win! Rock beats Scissors");
                    humanScore++;
                break;
            }
        break;
        
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You win! Paper beats Rock");
                    humanScore++;
                break;
                
                case "paper":
                    console.log("It's a draw! Paper ties with Paper");
                    humanScore++;
                    computerScore++;
                break;
                
                case "scissors":
                    console.log("You lose! Scissors beats Paper");
                    computerScore++;
                break;
            }
        break;
        
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats Scissors");
                    computerScore++;
                break;
                
                case "paper":
                    console.log("You win! Scissors beats Paper");
                    humanScore++;
                break;
                
                case "scissors":
                    console.log("It's a draw! Scissors ties with Scissors");
                    humanScore++;
                    computerScore++;
                break;
            }
        break;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    if (humanScore > computerScore) {
        console.log("You won more rounds!");
    } else if (humanScore < computerScore) {
        console.log("The computer won more rounds!");
    } else {
        console.log("You and the computer won the same amount of rounds!");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();