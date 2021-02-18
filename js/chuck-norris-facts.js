// ES6 Method - My Preferred Method

// Random Joke
const jokeBtn = document.getElementById("random-fact")
const jokeText = document.getElementById("random-joke")
const statText = document.getElementById("stat")

jokeBtn.addEventListener('click', (e) => {
        // console.log("Button Clicked")
        const url = 'https://api.chucknorris.io/jokes/random';
        // Fetch API - built into JavaScript
        fetch(url)
            .then(response => {
                // Convert to JSON
                return response.json()
                    // Returns Promise enabling the use of .then
            }).then(data => {
                // console.log(data.value)
                jokeText.innerHTML = data.value;
                statText.innerHTML = data.created_at;
            })
    })
    ///////////////////////////////////////////////////////////////////////
    // Categories

const animal = document.getElementById("Animal")
animal.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=animal';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const career = document.getElementById("Career")
career.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=career';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const celebrity = document.getElementById("Celebrity")
celebrity.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=celebrity';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const dev = document.getElementById("Dev")
dev.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const explicit = document.getElementById("Explicit")
explicit.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=explicit';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const fashon = document.getElementById("Fashion")
Fashion.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=fashion';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const food = document.getElementById("Food")
food.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=food';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const history = document.getElementById("History")
history.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=history';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const money = document.getElementById("Money")
money.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=money';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const movie = document.getElementById("Movie")
movie.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=movie';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const music = document.getElementById("Music")
music.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=music';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const politicial = document.getElementById("Political")
Political.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=political';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const religion = document.getElementById("Religion")
Religion.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=religion';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const science = document.getElementById("Science")
science.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=science';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const sport = document.getElementById("Sport")
sport.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=sport';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})
const travel = document.getElementById("Travel")
travel.addEventListener('click', (e) => {
    // console.log("Button Clicked")
    const url = 'https://api.chucknorris.io/jokes/random?category=travel';
    // Fetch API - built into JavaScript
    fetch(url)
        .then(response => {
            // Convert to JSON
            return response.json()
                // Returns Promise enabling the use of .then
        }).then(data => {

            jokeText.innerHTML = data.value;
            statText.innerHTML = data.created_at;
        })
})

// Customise Random Joke with Your Name using Template Literals
const jokeForm = document.getElementById("jokeForm");
const cstmJoke = document.getElementById("cstmJoke");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

jokeForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    // console.log('Clicked the Button')

    const firstName = firstNameInput.value || 'Chuck';
    const lastName = lastNameInput.value || 'Norris';
    const url = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        cstmJoke.innerHTML = data.value.joke;
    } catch (ex) {
        console.error(ex);
    }
});