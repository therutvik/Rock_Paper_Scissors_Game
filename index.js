let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#mess");

const uscor= document.querySelector("#user");
const cscor= document.querySelector("#comscor");

const genComputerChoice = () => {

    const Options = ['rock', 'paper', 'scissors'];
    Math.floor(Math.random() * 3);
    const randomNumber = Math.floor(Math.random() * 3);
    return Options[randomNumber];
}

const drawGame = () => {
    msg.innerText = "Game Draw!"; 
    msg.style.backgroundColor = "yellow";
}
const showWinner = (userWin, userChoice, computerChoice ) => {
    if(userWin) {
        userScore++;
        uscor.innerText = userScore;
        msg.innerText = "User wins! " + userChoice + " beats " + computerChoice;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        cscor.innerText = computerScore;
        msg.innerText = "User Loss!" + computerChoice + " beats " + userChoice;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    
    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice ==="rock") {
            userWin = computerChoice === "paper"? false : true; 

        } else if(userChoice === "paper") {
            userWin = computerChoice === "scissors"? false : true; 

        } else if(userChoice === "scissors") {
            computerChoice === "rock"? false : true;
        }

        showWinner(userWin,userChoice, computerChoice);
    }



}
choices.forEach((choice) => {
    choice.addEventListener('click', ()=> {
       const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});