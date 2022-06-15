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

function getUserInput() {
    while (true) {
        input = prompt('Rock, Paper, or Scissors?')
        if (input.toLowerCase() == 'rock' || input.toLowerCase() == 'paper'
            || input.toLowerCase() == 'scissors') {
                break
        }else {
            continue
        }
    }
    return input.toLowerCase()
}

function game() {    
    let win = lose = tie = 0;
    for (let i=0; i<5; i++) {
        const playerSelection = getUserInput();
        const computerSelection = computerPlay();
        results = playRound(playerSelection, computerSelection)
        if (results == true) {
            console.log(`Round ${i+1} results: ` + `You Win! ${playerSelection} beats ${computerSelection}`)
            win += 1;
        }else if (results == "tie") {
            console.log(`Round ${i+1} results: ` + 'It is a tie!')
            tie += 1;
        }else {
            console.log(`Round ${i+1} results: ` + `You Lose! ${computerSelection} beats ${playerSelection}`)
            lose += 1;
        }
    }
    console.log(`win: ${win} | lose: ${lose} | tie: ${tie}`)
    if (win > lose) {
        console.log('YOU WIN!')
    }
    else {
        console.log('YOU LOSE!')
    }
    
}

game()