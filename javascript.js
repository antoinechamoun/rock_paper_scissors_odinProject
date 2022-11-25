let playerSelection, computerSelection;
let counterPlayer=0;
let counterComputer=0;

function getComputerChoice(){
    let array = ['Rock', 'Paper', 'Scissors']
    let choiceNum = Math.floor(Math.random()*3)
    computerSelection=array[choiceNum]
    return computerSelection 
}

function getPlayerSelection(e){
        playerSelection=e.srcElement.id;
        if(playerSelection == 'restart'){
            location.reload()
        }
        return playerSelection;
}

function playRound(e){
    let player = getPlayerSelection(e).toLowerCase()
    let computer = getComputerChoice().toLowerCase()
    let resultPlayer = document.querySelector('.result1')
    let resultComputer = document.querySelector('.result2')

    if(!player)return
    if(counterPlayer == 4 || counterComputer == 4){
        window.removeEventListener('click',playRound);
        counterPlayer==4 ? counterComputer == 4 ? alert("Same result") : alert("Congrats! You won!") : alert("Bad Luck!")
   }else if(player === computer){
        counterComputer++;
        counterPlayer++;
    }else
    // player winning conditions
    if(player === "rock" && computer === "scissors" ||
       player === "paper" && computer === "rock" ||
       player === "scissors" && computer === "paper"){
        counterPlayer++;
    } else {
        counterComputer++;
    }

    resultPlayer.textContent = `Your result: ${counterPlayer}`;
    resultComputer.textContent = `Computer result: ${counterComputer}`;
}


window.addEventListener('click', playRound)