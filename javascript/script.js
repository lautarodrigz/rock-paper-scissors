const btnsContainer = document.createElement("div");
for (let i = 0; i < 3; i++) {
    const choices = ["Rock", "Paper", "Scissors"];
    const btn = document.createElement("button");
    btn.textContent = choices[i];
    btnsContainer.appendChild(btn);
}
document.body.appendChild(btnsContainer);
const btnsArray = Array.from(btnsContainer.children);
const selections = document.createElement("div");
const result = document.createElement("div")

btnsArray.forEach((btn) => {
    btn.addEventListener("click", () => {
        playRound(btn.textContent, getComputerChoice());
    })
})

document.body.appendChild(selections);
document.body.appendChild(result);
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let result = choices[(Math.floor(Math.random() * 3))]
    return result
}

function playRound(playerSelection, computerSelection) {
    selections.textContent = "You selected: " + playerSelection.toLowerCase() + ".   -----    The computer selected: " + computerSelection.toLowerCase() + ".";
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection) {
                case "Rock":
                    result.textContent = "Tie! Rock vs Rock";
                    return 3
                case "Paper":
                    result.textContent = "You lose! Paper beats Rock";
                    return 2
                case "Scissors":
                    result.textContent = "You win! Rock beats Scissors";
                    return 1
                default:
                    return console.error("Error");
            }
        case "paper":
            switch (computerSelection) {
                case "Rock":
                    result.textContent = "You win! Paper beats Rock";
                    return 1
                case "Paper":
                    result.textContent = "Tie! Paper vs Paper";
                    return 3
                case "Scissors":
                    result.textContent = "You lose! Scissors beat Paper";
                    return 2
                default:
                    return console.error("Error");
            }
        case "scissors":
            switch (computerSelection) {
                case "Rock":
                    result.textContent = "You lose! Rock beats Scissors";
                    return 2
                case "Paper":
                    result.textContent = "You win! Scissors beat Paper";
                    return 1
                case "Scissors":
                    result.textContent = "Tie! Scissors vs Scissors";
                    return 3
                default:
                    return console.error("Error");
            }
        default:
            return console.error("Error");
    }
}

// function playGame() {
//     let playerChoice = "";
//     let wins = 0;
//     let loses = 0;
//     let ties = 0;
//     for (let i = 0; i < 5; i++) {
//         do {
//             playerChoice = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
//             if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
//                 alert("That is not a valid option! Please choose again.");
//             }
//         } while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");
//         switch (playRound(playerChoice, getComputerChoice())) {
//             case 1:
//                 wins++;
//                 break;
//             case 2:
//                 loses++;
//                 break;
//             case 3:
//                 ties++;
//                 break;    
//             default:
//                 return console.error("Error");
//         }
//     }
//     console.log(`
//     ${wins} wins
//     ${loses} loses
//     ${ties} ties
//     `)
//     if (wins > loses) {
//         console.log(`You won the game! ${wins} wins vs ${loses} loses`)
//     } else if (loses > wins) {
//         console.log(`You lost the game! ${wins} wins vs ${loses} loses`)
//     } else {
//         console.log(`You tied the game! ${wins} wins vs ${loses} loses`)
//     }
// }

// playGame()