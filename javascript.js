let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    if(num==0){
        return 'rock';
    } else if(num==1){
        return 'paper';
    } else{
        return 'scissors'
    };
};

function getHumanChoice(){
    let escolha = prompt('Rock, Paper, Scissors?');
    return escolha.toLowerCase();
};

function playRound(humanChoice, computerChoice){
    if(humanChoice=='rock'){
        if(computerChoice=='scissors'){
            console.log('You win! Rock beats Scissors');
            humanScore++;
        } else if(computerChoice == 'paper'){
            console.log('You lose! Paper beats Rock');
            computerScore++;
        } else{
            console.log('Draw!');
        };
    } else if(humanChoice == 'paper'){
        if(computerChoice=='rock'){
            console.log('You win! Paper beats Rock');
            humanScore++;
        } else if(computerChoice == 'scissors'){
            console.log('You lose! Scissors beats Paper');
            computerScore++;
        } else{
            console.log('Draw!');
        };
    } else if(humanChoice == 'scissors'){
        if(computerChoice=='paper'){
            console.log('You win! Scissors beats Paper');
            humanScore++;
        } else if(computerChoice == 'rock'){
            console.log('You lose! Rock beats Scissors');
            computerScore++;
        } else{
            console.log('Draw!');
        };
    } else{
        console.log('Invalid input');
    };
};

function playGame(){
    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    };
    console.log(`Player score: ${humanScore} | Computer score: ${computerScore}`);
};