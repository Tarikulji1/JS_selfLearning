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


```