let randomNumber = parseInt(Math.random()*100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.loworHi')
const startover = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame)
    {
        submit.addEventListener('click', function(e)
    {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
    }

function validateGuess(guess)
{
    if(isNaN(guess))
        {
            alert('Please enter a valid number')
        }
        else if(guess < 1)
            {
                alert('Please enter a number a more then 1')
            }
        else if(guess > 100)
            {
                alert('Please enter a number a less then 100')
            }
            else{
                prevGuess.push(guess)
                if(numGuess === 11)
                    {
                        displayGuess(guess)
                        displayMessage(`Game Over. Random number was ${randomNumber}`)
                        endGame()
                    }
                else
                    {
                        displayGuess(guess)
                        checkGuess(guess)
                    }
            }
}
function checkGuess(guess)
{
    if(guess === randomNumber)
        {
            displayMessage(`You guessed it right`)
        }
        else if(guess < randomNumber)
            {
                displayMessage(`Number is TOO LOw`)
            }
            else if(guess > randomNumber)
                {
                    displayMessage(`Number is TOO Heigh`)
                }
}
function displayGuess(guess)
{
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message)
{
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function endGame()
{
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"; style="cursor: pointer;">New Game</h2>`
    startover.appendChild(p)
    playGame = false
    newGame()
}
function newGame()
{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e)
{
    randomNumber = parseInt(Math.random()*100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startover.removeChild(p)
    playGame = true
})
}