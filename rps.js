
var playerscore = 0;
var compscore = 0;

function computerplay(){
    let call = ["rock","paper","scissor"];
    return call[Math.floor(Math.random()*call.length)];
}


function playround(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            compscore = compscore+1;
            return("lose, paper beats rock");
        }
        else if (computerSelection == "scissor"){
            playerscore = playerscore+1;
            return("win, rock beats scissor");
        }
        else if (computerSelection == "rock") {
            return ("draw");
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "paper"){
            return("draw");
        }
        else if (computerSelection == "scissor"){
            compscore=compscore+1;
            return("lose, scissor beat paper");
        }
        else if (computerSelection == "rock")  {
            playerscore = playerscore+1;
            return ("win, paper beat rock");
        }
    }
    if(playerSelection == "scissor"){
        if(computerSelection == "paper"){
            playerscore = playerscore+1;
            return("win, scissor beat paper");
        }
        else if (computerSelection == "scissor"){
            return("draw");
        }
        else if (computerSelection == "rock") {
            compscore=compscore+1;
            return ("lose, rock beat scissor");
        }
    }
}


while ((playerscore <5) || (compscore <5)){
    if (playerscore==5){
        console.log("Player wins!");
        break;
    }
    if (compscore==5){
        console.log("Computer wins!");
        break;
    }
    computerSelection = computerplay();
    playerSelection = prompt("Rock/paper/sciSSor?");
    playerSelection = playerSelection.toLowerCase();
    console.log(playround(playerSelection,computerSelection));
    console.log(playerscore,compscore);
}