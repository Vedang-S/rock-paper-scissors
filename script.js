
let userChoice = document.querySelector(".user-choice");
let humanChoice = null;

let humanScore = 0;
let computerScore = 0;

let userScoreDisplay = document.querySelector("#user-score");
let computerScoreDisplay = document.querySelector("#computer-score");

let userChoiceDisplay = document.querySelector("#user-made");
let computerChoiceDisplay = document.querySelector("#computer-made");
let outcomeDisplay = document.querySelector("#outcome");

let winnerDisplay = document.querySelector("#winner-announcement");
let winnerPopUp = document.querySelector(".winner-popup");
let winnerOkay = document.querySelector("#popup-button");
let winnerScore = document.querySelector("#score-announcement");
let modal = document.querySelector(".modal");


// Close winner pop up
winnerOkay.addEventListener('click', () => modal.classList.remove('open'));

// Get comnputer choice
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

// Get human choice
userChoice.addEventListener(`click`, (event) => {
    humanChoice = event.target.id;
    playGame();
});

function updateScoresDisplay() {
    userScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;
}

function playGame() {

    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    function playRound(humanChoice, computerChoice) {

        if(!humanChoice) {
            outcomeDisplay.innerText = `Please click on the buttons!`;
            humanChoice = `the background..`;        
        }
        console.log(`You chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);

        userChoiceDisplay.innerText = `You chose ${humanChoice}!`;
        computerChoiceDisplay.innerText = `Computer chose ${computerChoice}!`;

        if (humanChoice == `rock` && computerChoice == `paper`) {
            outcomeDisplay.innerText = `You lose! Paper beats rock.`;
            console.log(`You lose! Paper beats rock.`);
            computerScore++;
            updateScoresDisplay();
        }
        if (humanChoice == `paper` && computerChoice == `scissors`) {
            outcomeDisplay.innerText = `You lose! Scissors beats paper.`;
            console.log(`You lose! Scissors beats paper.`);
            computerScore++;
            updateScoresDisplay();
        }
        if (humanChoice == `scissors` && computerChoice == `rock`) { 
            outcomeDisplay.innerText = `You lose! Rock beats scissors.`;
            console.log(`You lose! Rock beats scissors.`);
            computerScore++;
            updateScoresDisplay();
        }
        if (humanChoice == `rock` && computerChoice == `scissors`) {
            outcomeDisplay.innerText =  `You win! Rock beats scissors.`;
            console.log(`You win! Rock beats scissors.`);
            humanScore++;
            updateScoresDisplay();
        }
        if (humanChoice == `paper` && computerChoice == `rock`) {
            outcomeDisplay.innerText = `You win! Paper beats rock.`;
            console.log(`You win! Paper beats rock.`);
            humanScore++;
            updateScoresDisplay();
        }
        if (humanChoice == `scissors` && computerChoice == `paper`) { 
            outcomeDisplay.innerText = `You win! Scissors beats paper.`;
            console.log(`You win! Scissors beats paper.`);
            humanScore++;
            updateScoresDisplay();
        }
        if(humanChoice == computerChoice) {
            outcomeDisplay.innerText = `It's a draw!`;
            console.log(`It's a draw!`);
        }

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);

        updateScoresDisplay();

        if(humanScore == 5) {
            console.log("YOU WIN!");
            humanScore = 0;
            computerScore = 0;
            updateScoresDisplay();
            winnerDisplay.innerText = `YOU WiN!`;
            winnerScore.innerText = `Your score hit 5!`;
            modal.classList.add('open');
        }
        if(computerScore == 5) {
            console.log("COMPUTER WINS!");
            humanScore = 0;
            computerScore = 0;
            updateScoresDisplay();
            winnerDisplay.innerText = `COMPUTER WIN!`;
            winnerScore.innerText = `Computer score hit 5!`;
            modal.classList.add('open');
        }
    }    
}
