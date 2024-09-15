function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    let userChoice = prompt("What's your choice? (rock, paper, scissors)");
    userChoice = userChoice.toLowerCase();
    // Validate input
    while (!["rock", "paper", "scissors"].includes(userChoice)) {
        userChoice = prompt("Invalid choice. Please choose rock, paper, or scissors:");
        userChoice = userChoice.toLowerCase();
    }
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`Computer choice: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    // Check if the human wins
    const winConditions = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };

    if (computerChoice === winConditions[humanChoice]) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    const totalRounds = 5;

    for (let i = 0; i < totalRounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Score after round ${i + 1} - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Final winner determination
    if (humanScore > computerScore) {
        console.log("Congratulations, you win the game!");
    } else if (humanScore < computerScore) {
        console.log("CPU wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();
