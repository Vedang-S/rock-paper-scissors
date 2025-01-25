
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            return `rock`;
            break;
        case 1:
            return `paper`;
            break;
        case 2:
            return `scissors`;
            break;
    }
    return choice;
}

function getHumanChoice() {
    let userChoice = prompt("Rock, paper or scissors?").toLowerCase();
    if(userChoice == `rock` || userChoice == `paper` || userChoice == `scissors`)
        return userChoice;
    else return `ERROR`;
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === `ERROR`) {
            console.log(`INPUT ERROR, TRY AGAIN`);
            return;
        }

        console.log(`You chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);

        if (humanChoice == `rock` && computerChoice == `paper`) {
            console.log(`You lose! Paper beats rock.`);
            computerScore++;
        }
        if (humanChoice == `paper` && computerChoice == `scissors`) {
            console.log(`You lose! Scissors beats paper.`);
            computerScore++;
        }
        if (humanChoice == `scissors` && computerChoice == `rock`) { 
            console.log(`You lose! Rock beats scissors.`);
            computerScore++;
        }
        if (humanChoice == `rock` && computerChoice == `scissors`) { 
            console.log(`You win! Rock beats scissors.`);
            humanScore++;
        }
        if (humanChoice == `paper` && computerChoice == `rock`) {
            console.log(`You win! Paper beats rock.`);
            humanScore++;
        }
        if (humanChoice == `scissors` && computerChoice == `paper`) { 
            console.log(`You win! Scissors beats paper.`);
            humanScore++;
        }
        if(humanChoice == computerChoice)
            console.log(`It's a draw!`);

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection ,computerSelection);
    }
}

playGame();