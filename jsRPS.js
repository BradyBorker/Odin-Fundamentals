/*
#! JavaScript
Rock Paper Scissors game played against computer
*/

/*
Generate a random number from: 1,2,3
1 = rock, 2 = paper, 3 = scissors
return rock, paper, or scissors
*/
function computerChoice() {
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
        return true;
    }else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return true;
    }else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return true;
    }else {
        if (playerSelection == computerSelection) {
            return "tie";
        }
        else {
            return false;
        }
    }
}

function game(playerSelection) {    
    
    const computerSelection = computerChoice();
    results = playRound(playerSelection, computerSelection)

    const win = document.querySelector('.win');
    const lose = document.querySelector('.lose');
    const tie = document.querySelector('.tie');
    
    if (results == true) {
        win.textContent = (Number(win.textContent)+1).toString();
    }else if (results == "tie") {
        tie.textContent = (Number(tie.textContent)+1).toString();
    }else {
        lose.textContent = (Number(lose.textContent)+1).toString();
    }
    
}

// Wait for user click to select rock, paper, or scissor
// Use input to play game

const userInput = document.querySelectorAll(".user-cards div")
userInput.forEach((card) => {
    
    card.addEventListener('click', (e) => {
        playerSelection = e.target.className
        game(playerSelection)
    })

})
