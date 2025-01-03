function getComputerChoice() {
    let variable = Math.floor(Math.random()*3) + 1;
    
    switch (variable) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3:
            return 'SCISSOR';
        default:
            break;
    }
}

function getHumanChoice() {
    let choice = prompt('What do you want to throw?','');

    switch (choice.toUpperCase()) {
        case 'ROCK':
            return 'ROCK';
            break;
        case 'PAPER':
            return 'PAPER';
            break;
        case 'SCISSOR':
            return 'SCISSOR';
            break;
        case '':
            return 'Empty input is not valid.';
            break;
        default:
            return choice +' is not a valid input. Please enter a valid input.'
            break;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log('Its a tie!');
    }else if (humanChoice === 'ROCK'){
        if (computerChoice === 'PAPER'){
            console.log('Paper beats rock! You lose :(');
            computerScore++;
        }else{
            console.log('Rock beats scissor! You win :)');
            humanScore++;
        }
    }else if (humanChoice === 'PAPER'){
        if (computerChoice === 'ROCK'){
            console.log('Paper beats rock! You win :)');
            humanScore++;
        }else{
            console.log('Scissor beats paper! You lose :(');
            computerScore++;
        }
    }else{
        if (computerChoice === 'ROCK'){
            console.log('Rock beats scissor! You lose :(');
            computerScore++;
        }else{
            console.log('Scissor beats paper! You win :)');
            humanScore++
        }
    }
}
// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
// console.log(`${humanSelection} is the human selcection, ${computerSelection} is the computer selection, ${humanScore} is the human score and ${computerScore} is the computer score.`)


function playGame(){

    for (i=0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`${humanSelection} is the human selcection, ${computerSelection} is the computer selection, ${humanScore} is the human score and ${computerScore} is the computer score.`)

    }
    
    if (humanScore > computerScore) {
        console.log('You win the game!');
    }else if(computerScore > humanScore){
        console.log('You lost the game!') ;
    }else {
        console.log('You tied the game!');
    }
    
}

playGame();
