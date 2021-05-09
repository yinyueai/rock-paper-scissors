let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let result = Math.floor(Math.random() * 3) + 1;
    if (result === 1){
        return "rock";
    } else if (result === 2){
        return "scissors";
    } else {
        return "paper";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore += 1;
        return "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore += 1;
        return "You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore += 1;
        return "You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore += 1;
        return "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore += 1;
        return "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore += 1;
        return "You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection;
    } else {
        return 'It\'s a tie!';
    }
}

function game(){
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++){
        playerSelection = (prompt("Choose rock, paper, or scissors.")).toLowerCase();

        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
            playerSelection = (prompt("Invalid value. Choose rock, paper, or scissors.")).toLowerCase();
        }

        computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection));
        console.log("Your choice: " + playerSelection + "\nOpponent's choice: " + computerSelection + "\nYour score: " + playerScore + "\nOpponent score: " + computerScore);
    }

    if (playerScore > computerScore){
        alert("You are the winner!!! :D\nYour score: " + playerScore + "\nComputer score: " + computerScore);
    } else{
        alert("Computer is the winner!!! :((\n\nYour score: " + playerScore + "\nComputer score: " + computerScore);
    }
}