/*
#! JavaScript
Rock Paper Scissors game played against computer
*/

/*
Generate a random number from: 1,2,3
1 = rock, 2 = paper, 3 = scissors
return rock, paper, or scissors
*/
function computerPlay() {
    randomNum = Math.floor(Math.random()*3)+1
    if (randomNum == 1) {
        return 'rock'
    }else if (randomNum == 2) {
        return 'paper'
    }else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        //return `You Win! ${playerSelection} beats ${computerSelection}`
        return true;
    }else if (playerSelection == 'paper' && computerSelection == 'rock') {
        //return `You Win! ${playerSelection} beats ${computerSelection}`
        return true;
    }else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        //return `You Win! ${playerSelection} beats ${computerSelection}`
        return true;
    }else {
        if (playerSelection == computerSelection) {
            return "tie";
        }
        else {
            //return `You Lose! ${computerSelection} beats ${playerSelection}`
            return false;
        }
    }
}

function game() {    
    let win, lose, tie = 0;
    for (let i=0; i<5; i++) {
        const playerSelection = 'rock';
        const computerSelection = computerPlay();
        //console.log(`Round ${i+1} results: ` + playRound(playerSelection, computerSelection))
        results = playRound(playerSelection, computerSelection)
        if (results) {
            console.log(`Round ${i+1} results: ` + `You Win! ${playerSelection} beats ${computerSelection}`)
        }else if (results == "tie") {
            console.log(`Round ${i+1} results: ` + 'It is a tie!')
        }else {
            console.log(`Round ${i+1} results: ` + `You Lose! ${computerSelection} beats ${playerSelection}`)
        }
    }
    
}

game()