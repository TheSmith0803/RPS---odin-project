/**ROCK PAPER SCISSORS*/

//use an array to store all possible choices
const choices = ["rock", "paper", "scissors"];
const c_choice = choices[getComputerChoice()];
const u_choice = getUserChoice();

//get the computers choice
function getComputerChoice() {
    let c_choice = Math.floor(Math.random() * 3);
    return c_choice;
}

//get users choice
function getUserChoice() {
    let u_choice = prompt("Please type rock, paper, or scissors").toLowerCase();
    return u_choice;
}

//conditional to ensure the user can only enter one of the choices


console.log("RESULTS");

//define a count for games played and player scores
let count = 1;
let c_score = 0;
let u_score = 0;

while (count <= 5) {
    if (c_choice == u_choice) {
        console.log("It's a tie!");
        continue
    }

    if (c_choice == "rock" && u_choice == "paper") {
        u_score++;
        alert(`You take this round!\n SCORE:\n You: ${u_score}\n Opponent: ${c_score}`);
    } else if (c_choice == "rock" && u_choice == "scissors") {
        c_score++;
        alert(`You lost this round!\n SCORE:\n You: ${u_score}\n Opponent: ${c_score}`);
    } else if (c_choice == "paper" && u_choice == "scissors") {
        u_score++;
        alert(`You take this round!\n SCORE:\n You: ${u_score}\n Opponent: ${c_score}`);
    } 
}

function playRound() {
    while (!choices.includes(u_choice)) {
        alert("Please only type rock, paper, or scissors...");
        u_choice = getUserChoice();      
    }
}
//conditionals for scenarios
