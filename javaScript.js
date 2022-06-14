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
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else {
        if (playerSelection == computerSelection) {
            return "It's a tie!"
        }
        else {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
    }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();

console.log('Computer Selection: ' + computerSelection)
console.log(playRound(playerSelection, computerSelection))

