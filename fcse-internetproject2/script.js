/* Cat facts API endpoint:
 * https://cat-fact.herokuapp.com/facts
 * 
 * Cat images API endpoint:
 * https://api.thecatapi.com/v1/images/search
 */
/*let guessInput = document.getElementById("guessInput");
let user_guesses = 0;*/



<<<<<<< HEAD
async function getCat() {
            let response = await fetch("https://api.thecatapi.com/v1/images/search");
            if (response.ok) {
                let json = await response.json();
                let catImage = json[0].url;
                document.getElementById("cat").src = catImage;
                document.getElementById("cat").style.display = "block";
            } else {
                alert("Failed to fetch cat image. Please try again later.");
            }
        }

  let catCount = 0;
        let randomNumber = Math.floor(Math.random() * 20) + 1;
        console.log(randomNumber);

        function checkGuess() {
            let userGuess = parseInt(document.getElementById("guessInput").value);
            if (userGuess === randomNumber) {
                randomNumber = Math.floor(Math.random() * 20) + 1;
                document.getElementById("result").innerText = "Congratulations! You guessed the correct number!";
                if (++catCount === 3) {
                    getCat();
                    catCount = 0;
                }
            } else if (userGuess < randomNumber) {
                document.getElementById("result").innerText = "Try again! The number is higher.";
            } else {
                document.getElementById("result").innerText = "Try again! The number is lower.";
            }
        }
=======
var catCount = 0;
var randomNumber = Math.floor(Math.random() * 30) + 1;
console.log(randomNumber);

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    if (userGuess === randomNumber) {
        document.getElementById("result").innerText = "Congratulations! You guessed the correct number!";
        if (catCount <= 4) {
            getCat();
            catCount = 0;
        }
    } else if (userGuess < randomNumber) {
        document.getElementById("result").innerText = "Try again! The number is higher.";
        catCount = catCount + 1;
    } else {
        document.getElementById("result").innerText = "Try again! The number is lower.";
        catCount = catCount + 1;
    }
    if (catCount === 4) {
        document.getElementById("result").innerText = "You fail! You have used all your guesses.";
        getFact();
    }
}

async function getCat() {
    
    let response = await
    fetch("https://api.thecatapi.com/v1/images/search");
    
    if (response.ok) {
        let json = await response.json();
        let catImage = json[0].url;
        document.getElementById("result").innerText = "Congratulations! You guessed the correct number! Here's a cat picture:";
        document.getElementById("cat").src = catImage;
        document.getElementById("cat").style.display = "block";
    } else {
        alert("Failed to fetch cat image. Please try again later.");
    }
}

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

>>>>>>> 5ec7803 (added getFact for second API, checkGuess() changes, and some html changes of title and desc.)
