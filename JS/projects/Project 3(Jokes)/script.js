// {/* <div id="joke" class="joke">Loading Joke...</div>
//         <button id="jokeBtn" class="btn">Next</button>
//     </div> */}

    // GET https://rapidapi.com/#randomjokes
// ---------------------------------------------------------------------------------------------
  
const jokes = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

//                                                             Using Promises

// const generateJokes = () =>{


//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res) => {
//         return res.json()
//     }).then((data) =>{
//         return joke.innerHTML = data.joke
//     }).catch((error) => {
//         console.log(error)
//     })
// }

//------------------------------------------------------------------------------------------------------

//                                                          Using async/await

const generateJokes = async() =>{

    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com', setHeader)
        const data = await res.json()
        joke.innerHTML = data.joke

    }catch(err){
        console.log(`error is ${err}`)
    }
}

jokeBtn.addEventListener('click', generateJokes)
generateJokes()
