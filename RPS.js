/**ROCK PAPER SCISSORS*/

//use an array to store all possible choices
const choices = ["rock", "paper", "scissors"];

//get the computers choice
function getComputerChoice() {
    let c_choice = Math.floor(Math.random() * 3);
    return c_choice;
}

let c_choice = choices[getComputerChoice()];

//get users choice
function getUserChoice() {
    let u_choice = prompt("Please type rock, paper, or scissors").toLowerCase();
    return u_choice;
}

let u_choice = getUserChoice();

//conditional to ensure the user can only enter one of the choices
while (!choices.includes(u_choice)) {
    alert("Please only type rock, paper, or scissors...");
    u_choice = getUserChoice();      
}

console.log("RESULTS");

//conditionals for scenarios
if (c_choice == u_choice) {
    console.log("It's a tie!");
}
