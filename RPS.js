/**ROCK PAPER SCISSORS*/

//use an array to store all possible choices
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    c_choice = Math.floor(Math.random() * 3);
    return c_choice;
}

c_choice = choices[getComputerChoice()];
console.log(c_choice);