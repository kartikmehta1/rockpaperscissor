var playerscore = 0;
var compscore = 0;

const mainbody = document.querySelector('body');
const buttons = document.getElementById("contents");

const result = document.createElement('div');
const score = document.createElement('div');
const winner = document.createElement('div');
const play_again = document.createElement('button');

play_again.textContent = "Play Again!!";
play_again.setAttribute('id','reset');
result.setAttribute('id','result');
score.setAttribute('id','score');

mainbody.appendChild(result);
mainbody.appendChild(score);

function computerplay(){
    let call = ["rock","paper","scissor"];
    return call[Math.floor(Math.random()*call.length)];
}

function playround(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            compscore = compscore+1;
            return("Loser, paper beats rock");
        }
        else if (computerSelection == "scissor"){
            playerscore = playerscore+1;
            return("Winner, rock beats scissor");
        }
        else if (computerSelection == "rock") {
            return ("Draw");
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "paper"){
            return("Draw");
        }
        else if (computerSelection == "scissor"){
            compscore=compscore+1;
            return("Loser, scissor beat paper");
        }
        else if (computerSelection == "rock")  {
            playerscore = playerscore+1;
            return ("Winner, paper beat rock");
        }
    }
    if(playerSelection == "scissor"){
        if(computerSelection == "paper"){
            playerscore = playerscore+1;
            return("Winner, scissor beat paper");
        }
        else if (computerSelection == "scissor"){
            return("Draw");
        }
        else if (computerSelection == "rock") {
            compscore=compscore+1;
            return ("Loser, rock beat scissor");
        }
    }
}

function clicked(e){
    const audiowin = document.querySelector(`audio[id="winsound"]`);
    const audiolose = document.querySelector(`audio[id="losesound"]`);
    audiowin.currentTime = 0;
    audiolose.currentTime = 0;
    //console.log(e);
    //console.log(e.target.id);
    if(e.target.id=="reset"){
        mainbody.removeChild(winner);
        mainbody.removeChild(play_again);
        mainbody.appendChild(buttons);
        mainbody.appendChild(result);
        mainbody.appendChild(score);
    };
    var playerSelection= (e.target.id);
    if(playerSelection=='rock'||playerSelection=='paper'||playerSelection=='scissor')
    {
        playerSelection = playerSelection.toLowerCase();
        //console.log(playerSelection);
        //console.log(playerscore);
        //console.log(compscore);
        computerSelection = computerplay();
        var pscr=playerscore;
        var cscr=compscore;
        result.textContent = playround(playerSelection,computerSelection);
        score.textContent = [playerscore, compscore];
        if(playerscore>pscr){
            audiowin.play();
        }
        if(compscore>cscr){
            audiolose.play();
        }
        console.log(pscr,playerscore,cscr,compscore);
        mainbody.appendChild(result);
        mainbody.appendChild(score);
        if (playerscore==5){
            winner.textContent = "Player wins!";
            console.log("Player wins!");
            mainbody.removeChild(result);
            mainbody.removeChild(score);
            mainbody.removeChild(buttons);
            mainbody.appendChild(winner);
            mainbody.appendChild(play_again);
            playerscore=0;
            compscore=0;
        }
        if (compscore==5){
            winner.textContent = "Computer wins!";
            console.log("Computer wins!");
            mainbody.removeChild(result);
            mainbody.removeChild(score);
            mainbody.removeChild(buttons);
            mainbody.appendChild(winner);
            mainbody.appendChild(play_again);
            playerscore=0;
            compscore=0;
        }
    }
}


window.addEventListener('click',clicked);