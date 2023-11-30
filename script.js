let operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

//number buttons

const int1 = document.querySelector('.int1');
const int2 = document.querySelector('.int2');
const int3 = document.querySelector('.int3');
const int4 = document.querySelector('.int4');
const int5 = document.querySelector('.int5');
const int6 = document.querySelector('.int6');
const int7 = document.querySelector('.int7');
const int8 = document.querySelector('.int8');
const int9 = document.querySelector('.int9');
const int0 = document.querySelector('.int0');


//operator buttons

const addButton = document.querySelector('.addButton');
const subtractButton = document.querySelector('.subtractButton');
const divideButton = document.querySelector('.divideButton');
const multiplyButton = document.querySelector('.multiplyButton');
const clearButton = document.querySelector('.clearButton');
const deleteButton = document.querySelector('.deleteButton');
const equalButton = document.querySelector('.equalButton');

let character = '';
let result = '';
let value = [];

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (element) => {
    character = element.target.textContent;
    if (character == '=') {
      let value = result.split(/([-+\/\*])/);
      for (let i = 0; i < value.length; i++) {
        if (isNaN(value[i])) {
          let operator = value[i]
          i++;
          let nextNumber = parseFloat(value[i])
          result = operations[operator](result, nextNumber)
        } else {
          result = parseFloat(value[i])
        }
      }
    } else if (character == 'AC') {
      result = '';
    } else {
      result += character;
    }
    document.querySelector('.display1').textContent = result;
    if (result == 'Infinity') {
      alert('Cannot divide by 0');
    } 
  });
});

function keyDownInputs() {
  document.body.addEventListener('keydown', (event) => {
    if (event.key == 1) {
      result += event.key;   
      document.querySelector('.display1').textContent = result;
    } else if (event.key == 2) {
      result += event.key;
      document.querySelector('.display1').textContent = result;
    } else if (event.key == 3) {
      result += event.key;
      document.querySelector('.display1').textContent = result;
    } else if (event.key == 4) {
      result += event.key;
      document.querySelector('.display1').textContent = result;
    } else if (event.key == 5) {
      result += event.key;
      document.querySelector('.display1').textContent = result;
    } else if (event.key == 6) {
      result += event.key;
      document.querySelector('.display1').textContent = result;
    } else if (event.key == 7) {
      result += event.key;
      document.querySelector('.display1').textContent = result;
    } else if (event.key == 8) {
      result += event.key;
      document.querySelector('.display1').textContent = result;
    } else if (event.key == 9) {
      result += event.key;
      document.querySelector('.display1').textContent = result;
    } else if (event.key == 0) {
      result += event.key;
      document.querySelector('.display1').textContent = result;
    }
  })
};

keyDownInputs();
