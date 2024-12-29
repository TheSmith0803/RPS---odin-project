/**ROCK PAPER SCISSORS*/

//use an array to store all possible choices and count for round number
//init variables for computer and user choices
const choices = ["Rock", "Paper", "Scissors"];
let count = 0;
let humanScore = 0;
let computerScore = 0;

//get a random computer choice and return string from choices array
function getComputerChoice() {
    let c_num = Math.floor(Math.random() * 3);
    let c_choice = choices[c_num];
    return c_choice;
}

//variables for each button
const buttons = document.querySelectorAll(".button");
let buttons_arr = Array.from(buttons);
console.log(buttons_arr[0].textContent);

//variable for rounds played and displaying choices
const rounds = document.querySelector("#count");
const results = document.querySelector("#results");

//REMOVE! makes results ALWAYS visible
//results.style["color"] = "#000";

//loop to handle each buttonn
for (let i = 0; i < buttons_arr.length; i++) {

    //event listener for button interaction.
    buttons_arr[i].addEventListener("click", () => {

        let u_choice = buttons_arr[i].textContent.toLowerCase();
        let c_choice = getComputerChoice().toLowerCase();

        console.log("User Choice: " + u_choice);
        console.log("Computer Choice: " + c_choice);

        //conditional to properly increment count
        if (u_choice !== c_choice) {
            count++;
        }

        rounds.textContent = `Rounds played: ${count}`;
        results.style["color"] = "#000";
        
        
        //conditional for tie
        if (u_choice === c_choice) {
            results.textContent = `You both chose ${c_choice}, it's a tie!`;
        } 
        //conditionals for rock
        else if (u_choice === "rock" && c_choice === "scissors") {
            results.textContent = `You chose ${u_choice}, opponent chose ${c_choice}, you win!`;
            humanScore++;
        } 
        //conditional for paper
        else if (u_choice === "paper" && c_choice === "rock") {
            results.textContent = `You chose ${u_choice}, opponent chose ${c_choice}, you win!`;
            humanScore++;
        }
        //conditional for scissors
        else if (u_choice === "scissors" && c_choice === "paper") {
            results.textContent = `You chose ${u_choice}, opponent chose ${c_choice}, you win!`;
            humanScore++;
        }
        //conditional for losing
        else {
            results.textContent = `You chose ${u_choice}, opponent chose ${c_choice}, you lose!`;
            computerScore++;
        }

        console.log("HS: " + humanScore);
        console.log("CS: " + computerScore);

        //conditional for extra text at end of game
        if (count >= 5) {
            results.innerHTML = "<div><br>Would you like play again?</div>";
        }
    });
}

while (count >= 5) {
    results.textContent += "?????"
}






//console.log(u_choice);

//define player scores
let c_score = 0;
let u_score = 0;

