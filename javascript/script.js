function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let result = choices[(Math.floor(Math.random() * 3))]
    return result
}

function playRound(playerSelection, computerSelection) {
    console.log("You selected: " + playerSelection.toLowerCase())
    console.log("The computer selected: " + computerSelection.toLowerCase())
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection) {
                case "Rock":
                    return "Tie! Rock vs Rock"
                case "Paper":
                    return "You lose! Paper beats Rock"
                case "Scissors":
                    return "You win! Rock beats Scissors"
                default:
                    return "Error"
            }
        case "paper":
            switch (computerSelection) {
                case "Rock":
                    return "You win! Paper beats Rock"
                case "Paper":
                    return "Tie! Paper vs Paper"
                case "Scissors":
                    return "You lose! Scissors beat Paper"
                default:
                    return "Error"
            }
        case "scissors":
            switch (computerSelection) {
                case "Rock":
                    return "You lose! Rock beats Scissors"
                case "Paper":
                    return "You win! Scissors beat Paper"
                case "Scissors":
                    return "Tie! Scissors vs Scissors"
                default:
                    return "Error"
            }
        default:
            console.log("Error")
            break;
    }
}
