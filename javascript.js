let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    if(num==0){
        return 'Rock';
    } else if(num==1){
        return 'Paper';
    } else{
        return 'Scissors'
    };
};

function playRound(humanChoice, computerChoice){
    if(computerScore<5 && humanScore<5){
        if(humanChoice=="Rock"){
            if(computerChoice=="Scissors"){
                humanScore++
                document.querySelector("#human-score").textContent = humanScore;
                document.querySelector("#human-score").classList.add("scored");
                document.querySelector("#log").textContent = `${humanChoice} vs. ${computerChoice}`;
            } else if(computerChoice=="Paper"){
                computerScore++
                document.querySelector("#computer-score").textContent = computerScore;
                document.querySelector("#computer-score").classList.add("scored");
                document.querySelector("#log").textContent = `${humanChoice} vs. ${computerChoice}`;
            } else{
                document.querySelector("#log").textContent = `${humanChoice} vs. ${computerChoice}`;
            };
        } else if(humanChoice=="Paper"){
            if(computerChoice=="Rock"){
                humanScore++;
                document.querySelector("#human-score").textContent = humanScore;
                document.querySelector("#human-score").classList.add("scored");
                document.querySelector("#log").textContent = `${humanChoice} vs. ${computerChoice}`;
            } else if(computerChoice=="Scissors"){
                computerScore++
                document.querySelector("#computer-score").textContent = computerScore;
                document.querySelector("#computer-score").classList.add("scored");
                document.querySelector("#log").textContent = `${humanChoice} vs. ${computerChoice}`;
            } else{
                document.querySelector("#log").textContent = `${humanChoice} vs. ${computerChoice}`;
            };
        } else{
            if(computerChoice=="Paper"){
                humanScore++
                document.querySelector("#human-score").textContent = humanScore;
                document.querySelector("#human-score").classList.add("scored");
                document.querySelector("#log").textContent = `${humanChoice} vs. ${computerChoice}`;
            } else if(computerChoice=="Rock"){
                computerScore++
                document.querySelector("#computer-score").textContent = computerScore;
                document.querySelector("#computer-score").classList.add("scored");
                document.querySelector("#log").textContent = `${humanChoice} vs. ${computerChoice}`;
            } else{
                document.querySelector("#log").textContent = `${humanChoice} vs. ${computerChoice}`;
            };
        };
    };
    if(computerScore==5){
        document.querySelector("#log").textContent = "Computer wins!";
    } else{ if(humanScore==5)
        document.querySelector("#log").textContent = "You won!";
    };
};


document.querySelector("#human-score").addEventListener("transitionend", function(){
    document.querySelector("#human-score").classList.remove("scored")
});
document.querySelector("#computer-score").addEventListener("transitionend", function(){
    document.querySelector("#computer-score").classList.remove("scored")
});
document.querySelector("#rock").addEventListener("click", function(){
    document.querySelector("#rock").classList.add("clicked")
    humanChoice = "Rock";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
document.querySelector("#rock").addEventListener("transitionend", function(){
    document.querySelector("#rock").classList.remove("clicked")
});
document.querySelector("#paper").addEventListener("click", function(){
    document.querySelector("#paper").classList.add("clicked")
    humanChoice = "Paper";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
document.querySelector("#paper").addEventListener("transitionend", function(){
    document.querySelector("#paper").classList.remove("clicked")
});
document.querySelector("#scissors").addEventListener("click", function(){
    document.querySelector("#scissors").classList.add("clicked")
    humanChoice = "Scissors";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
document.querySelector("#scissors").addEventListener("transitionend", function(){
    document.querySelector("#scissors").classList.remove("clicked")
});
document.querySelector("#restart").addEventListener("click", function(){
    document.querySelector("#restart").classList.add("clicked");
    humanScore = 0;
    computerScore = 0;
    document.querySelector("#human-score").textContent = humanScore;
    document.querySelector("#computer-score").textContent = computerScore;
    document.querySelector("#log").textContent = "Can you beat the computer?";
});
document.querySelector("#restart").addEventListener("transitionend", function(){
    document.querySelector("#restart").classList.remove("clicked");
});
