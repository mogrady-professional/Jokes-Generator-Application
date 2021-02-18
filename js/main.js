const jokeEl = document.getElementById("joke");
const get_joke = document.getElementById("get_joke");

get_joke.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke() {
    // Call the API and Store as Variable, attach await method and headers
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            // Tell API We Require JSON Response
            'Accept': 'application/json'
        }
    })


    const joke = await jokeRes.json();
    console.log(joke);
    // Set the New Joke
    jokeEl.innerHTML = joke.joke;
}