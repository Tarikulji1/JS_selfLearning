const form = document.querySelector('form');
const resetButton = document.querySelector('#reset');
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
        results.innerHTML = `<span>${bmi} <br/> ${bmiText} </span>`
    }
});

resetButton.addEventListener('click', function () {
    document.querySelector('#height').value = '';
    document.querySelector('#weight').value = '';
    document.querySelector('#results').innerHTML = '';
})