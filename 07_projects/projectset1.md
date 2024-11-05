# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file-index.html)

#Solution code

## project1

```javascript
console.log("Pratham")
Color Changer
const butttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

butttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## Project 2

```javascript
BMI Calculator
const form = document.querySelector('form');
// this use case will give empty value
// const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const result1 = document.querySelector('#result1');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      result1.innerHTML = `\n Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result1.innerHTML = `\n Normal Range`;
    } else {
      result1.innerHTML = `\n Over Weight `;
    }
  }
});


```

## Project 3

```javascript
Digital Clock
const clock = document.getElementById('clock');
//const clock=document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```