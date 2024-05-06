/* Cat facts API endpoint:
 * https://cat-fact.herokuapp.com/facts
 * 
 * Cat images API endpoint:
 * https://api.thecatapi.com/v1/images/search
 */
/*let guessInput = document.getElementById("guessInput");
let user_guesses = 0;*/



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
