// Project by Hermione, Elise, Kelly.

/* Cat facts API endpoint:
 * https://cat-fact.herokuapp.com/facts
 * 
 * Cat images API endpoint:
 * https://api.thecatapi.com/v1/images/search
 */

/* Player enters an integer between 1 and 30 each time to match the unknown number.
 * Player can have 4 opportunities to guess.
 * If the player matches the unknown within 4 trials, he or she will receive a cat picture as reward.
 * If the player fails, he or she will receive a cat fact and need to type in the cat fact within 20 seconds.
 * If the player sucessfully complete the typing without mistakes, a cat picture will pop up on the screen.
 */


// Initiating variables and the guess game.
var catCount = 0;
var randomNumber = Math.floor(Math.random() * 30) + 1;
console.log(randomNumber);

// This function is to play the guessing game. The player only have 4 chances to try and 15 seconds to type.
function checkGuess() {
    var userGuess = parseInt(document.getElementById("guessInput").value);
    if (userGuess === randomNumber) {
        document.getElementById("result").innerText = "Congratulations! You have guessed the correct number!";
        if (catCount <= 4) {
            getCat();
            catCount = 0;
        }
    } else if (userGuess < randomNumber) {
        document.getElementById("result").innerText = "Try again! Your number is too low, the actual number is higher.";
        catCount = catCount + 1;
    } else {
        document.getElementById("result").innerText = "Try again! Your number is too high, the actual number is lower.";
        catCount = catCount + 1;
    }
    
    if (catCount === 4) {
        document.getElementById("result").innerText = "You fail!!! You have used all 4 guesses. You need to type the cat fact below within 15 seconds and click submit:";
        getFact();
        setTimeout(function() { document.getElementById("fact").innerHTML = "";
       }, 15000);
        setTimeout(function() { document.getElementById("result").innerHTML = "GAME OVER";
       }, 16000);   

    }
}

//This function is to use api to get the cat pictures.
async function getCat() {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (response.ok) {
        let json = await response.json();
        let catImage = json[0].url;
        document.getElementById("result").innerText = "Congratulations! Here's a cat picture:";
        document.getElementById("cat").src = catImage;
        document.getElementById("cat").style.display = "block";
    } else {
        alert("Failed to fetch cat image. Please try again later.");
    }
}

// This function is to use api to get the cat facts.
async function getFact() {
  // Define the API URL
  const apiUrl = "https://cat-fact.herokuapp.com/facts";
  let response = await 
  
  fetch(apiUrl)   
  if (response.ok) {
    let json = await response.json();
    let answerFact = Math.floor(Math.random() * 4) + 1;
    let catFact = json[answerFact].text; 
    document.getElementById("fact").innerHTML = catFact; 
    console.log(catFact);
  } else {
  alert("HTTP-Error: " + response.status);
 }
}

//This function is to enter the player's typing and to compare with the original cat facts.
function reciteFact() {
    const userFact = document.getElementById("reciteYourFact");
    const inputValue = userFact.value;
    console.log(inputValue); 
    
    catFact = document.getElementById("fact");
    factValue = catFact.innerHTML;
    console.log(factValue);
    if (inputValue === factValue) {
        document.getElementById("result").innerText = "Congratulations! You are a great typer!";
        getCat();
    }
    else {
        document.getElementById("result").innerText = "You're a failure! Improve your typing.";
    }
}