/* Cat facts API endpoint:
 * https://cat-fact.herokuapp.com/facts
 * 
 * Cat images API endpoint:
 * https://api.thecatapi.com/v1/images/search
 */

async function getCat() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  if (response.ok) {
    let json = await response.json();
    let catimg = json[0].url; 
    document.getElementById("cat").src = catimg; 
    console.log(json);
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

getCat();