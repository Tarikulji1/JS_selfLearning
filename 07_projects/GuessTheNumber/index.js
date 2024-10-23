let randomNumber = parseInt((Math.random() * 100) + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuess = [];
let numberGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
};

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please enter a valid number!');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        previousGuess.push(guess);
        if (numberGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Your guessed it right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is TOOO low`)
    } else if(guess > randomNumber){
        displayMessage(`Number is TOOO high`)
    }
};

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numberGuess++;
    remaining.innerHTML = `${11 - numberGuess}`;
};

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
};

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt((Math.random() * 100) + 1);
        previousGuess = [];
        numberGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numberGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
};