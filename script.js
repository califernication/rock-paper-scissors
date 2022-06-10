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

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));