/**ROCK PAPER SCISSORS*/

//use an array to store all possible choices and count for round number
//init variables for computer and user choices
const choices = ["rock", "paper", "scissors"];
let count = 0;

function getComputerChoice() {
    let c_choice = Math.floor(Math.random() * 3);
    return c_choice;
}

function getUserChoice() {
    
    return u_choice;
}

//variables for each button
const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const scissorBtn =document.querySelector("#scissors-button");

//variable for rounds played and displaying choices
const rounds = document.querySelector("#count");
const results = document.querySelector("#results");
//REMOVE! makes results ALWAYS visible
//results.style["color"] = "#000";

//event listeners for button interaction. I know...DRY but i feel like this isn't TOO bad
rockBtn.addEventListener("click", () => {
    let u_choice = "rock";
    let c_choice = choices[getComputerChoice()];
    count++;
    rounds.textContent = `Rounds played: ${count}`;
    results.style["color"] = "#000";

    if (u_choice === c_choice) {
        results.textContent = `You both chose ${c_choice}, it's a tie!`;
    } 
    else if (c_choice === "paper") {
        results.textContent = `Opponent chose ${c_choice}, you lose!`
    } else {
        results.textContent = `Opponent chose ${c_choice}, you win!`
    }
});

paperBtn.addEventListener("click", () => {
    let u_choice = "paper";
    let c_choice = choices[getComputerChoice()];
    count++;
    rounds.textContent = `Rounds played: ${count}`;
    results.style["color"] = "#000";

    if (u_choice === c_choice) {
        results.textContent = `You both chose ${c_choice}, it's a tie!`;
    } 
    else if (c_choice === "scissors") {
        results.textContent = `Opponent chose ${c_choice}, you lose!`
    } else {
        results.textContent = `Opponent chose ${c_choice}, you win!`
    }
});

scissorBtn.addEventListener("click", () => {
    let u_choice = "scissors";
    let c_choice = choices[getComputerChoice()];
    count++;
    rounds.textContent = `Rounds played: ${count}`;
    results.style["color"] = "#000";

    if (u_choice === c_choice) {
        results.textContent = `You both chose ${c_choice}, it's a tie!`;
    } 
    else if (c_choice === "rock") {
        results.textContent = `SMASH! Opponent chose ${c_choice}, you lose!`
    } else {
        results.textContent = `Opponent chose ${c_choice}, you win!`
    }
});

//console.log(u_choice);

//define player scores
let c_score = 0;
let u_score = 0;

