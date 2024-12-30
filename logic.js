function getComputerChoice() {
    let variable = Math.floor(Math.random()*3) + 1;
    
    switch (variable) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3:
            return 'SCISSORS';
        default:
            break;
    }
}

console.log(getComputerChoice());

