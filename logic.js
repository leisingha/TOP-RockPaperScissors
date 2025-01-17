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

let humanScore = 0;
let computerScore = 0;

const options = document.querySelector(".options");

const resultSection = document.querySelector('.result');

const gameScore = document.querySelector('.game-score');

const finalResult = document.createElement('h2');

const restartBttn = document.createElement('button');


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        resultSection.textContent = 'Its a tie!'
    }else if (humanChoice === 'ROCK'){
        if (computerChoice === 'PAPER'){
            resultSection.textContent = 'Paper beats rock! You lose :('
            computerScore++;
        }else{
            resultSection.textContent = 'Rock beats scissor! You win :)'
            humanScore++;
        }
    }else if (humanChoice === 'PAPER'){
        if (computerChoice === 'ROCK'){
            resultSection.textContent = 'Paper beats rock! You win :)'
            humanScore++;
        }else{
            resultSection.textContent = 'Scissor beats paper! You lose :('
            computerScore++;
        }
    }else{
        if (computerChoice === 'ROCK'){
            resultSection.textContent = 'Rock beats scissor! You lose :('
            computerScore++;
        }else{
            resultSection.textContent = 'Scissor beats paper! You win :)'
            humanScore++
        }
    }
    gameScore.textContent = `Your score is ${humanScore} | Computer score is ${computerScore}`
    
    
}

function resultGenerator(){
    
    if(humanScore == 5 || computerScore == 5){
        const isHumanWinner = (humanScore > computerScore);
        finalResult.textContent = (isHumanWinner) ? 'You WIN 🏆' : 'You LOSE 🙈';
        restartBttn.textContent = 'Restart 🔁';

        gameScore.appendChild(finalResult);
        finalResult.appendChild(restartBttn);

        const buttons = document.querySelectorAll('#rockBtn, #paperBtn, #scissorBtn');

        buttons.forEach((btn) =>{
            btn.disabled = true;
        })
        
        }
}


function restartGame(){
    humanScore = 0;
    computerScore = 0;
    resultSection.textContent='';
    gameScore.textContent='';
    finalResult.remove();
    const buttons = document.querySelectorAll('#rockBtn, #paperBtn, #scissorBtn');

    buttons.forEach((btn) =>{
        btn.disabled = false;
    })

}




options.addEventListener('click', (event) => {
    let target = event.target;
   
    switch(target.id){
        case 'rockBtn':
            playRound('ROCK',getComputerChoice());
            break;

        case 'paperBtn':
            playRound('PAPER', getComputerChoice());
            break;
        case 'scissorBtn':
            playRound('SCISSOR', getComputerChoice());
    }
    resultGenerator();

})

restartBttn.addEventListener('click',restartGame);










