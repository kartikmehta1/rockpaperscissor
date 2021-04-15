function computerplay(){
    let call = ["rock","paper","scissor"];
    return call[Math.floor(Math.random()*call.length)];
}

function playround(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return("lose");
        }
        else if (computerSelection == "scissor"){
            return("win");
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
            return("win");
        }
        else if (computerSelection == "rock")  {
            return ("lose");
        }
    }
    if(playerSelection == "scissor"){
        if(computerSelection == "paper"){
            return("win");
        }
        else if (computerSelection == "scissor"){
            return("draw");
        }
        else if (computerSelection == "rock") {
            return ("lose");
        }
    }
}


function game(){
    for (let j=1; j<6; j++){
        computerSelection = computerplay();
        playerSelection ='Rock';
        playerSelection = playerSelection.toLowerCase();
        console.log(playround(playerSelection,computerSelection));
    }
}

game();