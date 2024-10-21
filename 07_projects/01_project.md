# Projects related to DOM

### Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-czetvx?file=index.html)

# Solution Code

## Project 1: colorChanger

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id == 'grey') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'white') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'purple') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'red') {
            body.style.backgroundColor = e.target.id
        }
})
```

### Project 1 Assignment : Switch() Apply

```javascript
switch (e.target.id) {
            case 'grey':
            case 'white':
            case 'blue':
            case 'yellow':
            case 'purple':
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                break;
        }

```

## Project 2: BMI Calculator

```javascript

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0  || isNaN(height) ){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0  || isNaN(weight) ){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
       const bmi = (weight / ((height*height) / 10000)).toFixed(2);
       let bmiText = '';

       if (bmi < 18.6 ) {
           bmiText = 'Under Weight'
        } else if (bmi >= 18.6 && bmi <= 24.9){
            bmiText = 'Normal Range'
        } else if ( bmi > 24.9 ) {
            bmiText = 'Over Weight'
        }
        results.innerHTML = `<p>${bmi}</p>
                            <p>${bmiText}</p>`
    }
});

```

### Project 2 Assignment : BMI Weight Guide

```javascript

let bmiText = '';

       if (bmi < 18.6 ) {
           bmiText = 'Under Weight'
        } else if (bmi >= 18.6 && bmi <= 24.9){
            bmiText = 'Normal Range'
        } else if ( bmi > 24.9 ) {
            bmiText = 'Over Weight'
        }
        results.innerHTML = `<p>${bmi}</p>
                            <p>${bmiText}</p>`
                            
```

### Project 2 Assignment : Reset Button Add

```javascript
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function () {
    document.querySelector('#height').value = '';
    document.querySelector('#weight').value = '';
    document.querySelector('#results').innerHTML = '';
});

```

## Project 3 : Digital Clock

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```

## Project 4 : Guess the number

```javascript

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

```

## Project 5 : Keyboard's Key Code

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class = 'color'>
        <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>`
})

```

## Project 6 : Ultimate Color Generator

```javascript

// generator a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalId;

const startChangingColor = function () {
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
        const displayColor = document.querySelector('#colorCode');
        displayColor.textContent = randomColor();
    } 

    if(!intervalId){
        intervalId = setInterval(changeBgColor, 3000)
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```