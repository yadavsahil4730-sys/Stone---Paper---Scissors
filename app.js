let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice = () =>{
    const options=[ "rock", "paper", "scissors"];
 const randIdx=   Math.floor(Math.random()* 3);
 return options[randIdx];
}

const drawGame=()=>  {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";

};

const showWinner = (userWin) => {
    if(userWin) {
        console.log("you win!");
        msg.innerText = "You win!";
        p.Style.backgroundColor ="green";
    } else {
        console.log("you lose!");
        msg.innerText = "You lose!";
     msg.Style.backgroundColor ="red";
    }
}

const playGame = (userChoice) =>{
    console.log ("userChoice =", userChoice);
    // genrate comp choice
    const CompChoice=genCompChoice();
    console.log("comp choice=",CompChoice);

    if(userChoice === CompChoice){
    //draw Game
    drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock"){
        // sciessors ,paper
        userWin = CompChoice === "paper" ? false : true;
    } else if(userChoice === "paper" ){
        // rock , scissors
     userWin =   CompChoice === " scissors" ? false : true;
    } else {
        // rock , paper
        userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
};


choices.forEach((choice) => {
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);

});
});
