/**ROCK PAPER SCISSORS*/

//use an array to store all possible choices and count for round number
//init variables for computer and user choices
const choices = ["rock", "paper", "scissors"];
let count = 1;
let c_choice;
let u_choice;

function getComputerChoice() {
    let c_choice = Math.floor(Math.random() * 3);
    return c_choice;
}

function getUserChoice() {
    let u_choice = prompt("Please type rock, paper, or scissors").toLowerCase();
    return u_choice;
}

function playRound() {
    while (!choices.includes(u_choice)) {
        alert("Please only type rock, paper, or scissors...");
        u_choice = getUserChoice();
    }

    if (u_choice == c_choice) {
        alert(`It's a tie!\nSCORE:\nYou: ${u_score}\nOpponenet: ${c_score}`);
        count--;
    }

    if (u_choice == "rock" && c_choice == "scissors") {
        u_score++;
        alert(`You took this round!\nSCORE:\nYou: ${u_score}\nOpponenet: ${c_score}`);
    } else if (u_choice == "rock" && c_choice == "paper") {
        c_score++;
        alert(`Opponent took this round!\nSCORE:\nYou: ${u_score}\nOpponenet: ${c_score}`);
    }

    if (u_choice == "paper" && c_choice == "rock") {
        u_score++;
        alert(`You took this round!\nSCORE:\nYou: ${u_score}\nOpponenet: ${c_score}`);
    } else if (u_choice == "paper" && c_choice == "scissors") {
        c_score++;
        alert(`Opponent took this round!\nSCORE:\nYou: ${u_score}\nOpponenet: ${c_score}`);
    }

    if (u_choice == "scissors" && c_choice == "paper") {
        u_score++;
        alert(`You took this round!\nSCORE:\nYou: ${u_score}\nOpponenet: ${c_score}`);
    } else if (u_choice == "scissors" && c_choice == "rock") {
        c_score++;
        alert(`Opponent took this round!\nSCORE:\nYou: ${u_score}\nOpponenet: ${c_score}`);
    }

    count++;
}

//define player scores
let c_score = 0;
let u_score = 0;

//game loop
function playGame() {
    while (count <= 5) {
        alert(`Current round: ${count}`);
        c_choice = choices[getComputerChoice()];
        u_choice = getUserChoice();
        let result = playRound();
        console.log(result);

        if (u_score == 3) {
            alert("You win!");
            break;
        }
        else if (c_score == 3) {
            alert("You lose!");
            break
        }
        else if (count > 5) {
            break;
        }
    }
}

playGame();
/** 
let play_again = prompt("Would you like to play again? (type y or n)").toLowerCase();

while (play_again) {
    if (play_again == "y") {
        u_score = 0;
        c_score = 0;
        count = 1;
        playGame();
    } else if (play_again == "n") {
        alert("Goodbye!");
        break
    } else {
        alert("nah fam");
    }
}*/
