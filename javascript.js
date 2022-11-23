function getComputerChoice(){
    let array = ['Rock', 'Paper', 'Scissors']
    let choiceNum = Math.floor(Math.random()*3)
    return array[choiceNum]
}

function checkSelection(player, computer){
    let options = {rockHolder:"", paperHolder:"", scissorsHolder:""};
    
    if(player === "ROCK"){
        options.rockHolder = "player";
        if(computer ==="PAPER"){
            options.paperHolder = "computer"
        }else options.scissorsHolder = "computer"
    }

    if(player === "PAPER"){
        options.paperHolder = "player";
        if(computer ==="ROCK"){
            options.rockHolder = "computer"
        }else options.scissorsHolder = "computer"
    }

    if(player === "SCISSORS"){
        options.scissorsHolder = "player";
        if(computer ==="ROCK"){
            options.rockHolder = "computer"
        }else options.paperHolder = "computer"
    }
    return options
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toUpperCase()
    let computer = computerSelection.toUpperCase()
    if((player === null || player==='') || (player !== "ROCK" && player!== "PAPER" && player !== "SCISSORS")){
        console.log("You must select one choice between rock, paper or scissors");
    }else if(player === computer){
        console.log(`Draw! You both selected ${player}`);
    } else {
        let options = checkSelection(player, computer)
        if(options.rockHolder === ''){
            console.log(options.scissorsHolder, "is the winner");
        }
        if(options.scissorsHolder === ''){
            console.log(options.paperHolder, "is the winner");
        }
        if(options.paperHolder === ''){
            console.log(options.rockHolder, "is the winner");
        }
    }
}