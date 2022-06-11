function reset() {
    const userScore = document.querySelector("#user-score");
    userScore.textContent = 0
    const computerScore = document.querySelector("#computer-score");
    computerScore.textContent = 0
}

function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    const lst = ["Rock", "Paper", "Scissors"];
    return lst[i];
}

function playRound(PlayerSelection, ComputerSelection) {

    let firstLetter = PlayerSelection.charAt(0).toUpperCase();
    let restOfWord = PlayerSelection.slice(1);
    PlayerSelection = firstLetter + restOfWord;

    if (PlayerSelection == ComputerSelection) {
        return "You tie!"
    }

    else if (PlayerSelection == "Rock"){
        if (ComputerSelection == "Paper") {
            return "You lose! Paper beats rock."
        }
        if (ComputerSelection = "Scissors") {
            return "You win! Rock beats scissors"
        }
    }

    else if (PlayerSelection == "Paper"){
        if (ComputerSelection == "Rock") {
            return "You win! Paper beats rock."
        }
        if (ComputerSelection = "Scissors") {
            return "You lose! Scissors beats paper."
        }
    }

    else if (PlayerSelection == "Scissors"){
        if (ComputerSelection == "Rock") {
            return "You lose! Rock beats scissors."
        }
        if (ComputerSelection = "Paper") {
            return "You win! Scissors beats paper."
        }
    }

}

function game(userWeapon, userWins, computerWins) {

    var node= document.getElementById("message");
    node.querySelectorAll('*').forEach(n => n.remove());

    result = playRound(userWeapon, computerPlay());
    console.log(result);
    if (result.includes("win")) {
        const userScore = document.querySelector("#user-score");
        userWins = Number(userScore.textContent) + 1;
        userScore.textContent = userWins;
        if (userWins == 5){
            const winMessage = document.createElement('div');
            winMessage.textContent = "YOU WON!!";
            document.getElementById("message").appendChild(winMessage);
            reset();
        }
    }
    else if (result.includes("lose")) {
        const computerScore = document.querySelector("#computer-score");
        computerWins = Number(computerScore.textContent) + 1;
        computerScore.textContent = computerWins;
        if (computerWins == 5){
            const loseMesage = document.createElement('div');
            loseMesage.textContent = "YOU LOST :(";
            document.getElementById("message").appendChild(loseMesage);
            reset();
        }
    }
}

// Main Loop

var userWins = 0;
var computerWins = 0;

const btns = document.querySelectorAll('button');
for (i = 0; i < btns.length; i++) {
    let id = btns[i].id;
    btns[i].addEventListener('click', () => game(id, userWins, computerWins));
}