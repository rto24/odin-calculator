function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function divide(a, b) {
  return a / b;
};

function multiply(a, b) {
  return a * b;
};

const container = document.querySelector('#container');

const numSelect1 = [].map.call(document.querySelectorAll('.num'), function(num) {
  return num.innerHTML
}).join();

let array1 = numSelect1.split(',');

const numSelect2 = [].map.call(document.querySelectorAll('.num'), function(num) {
  return num.innerHTML
}).join();

let array2 = numSelect2.split(',');

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

//eventListeners for when number is selected

int1.addEventListener('click', () => {
  return console.log(array1[0]);
  }
);

int2.addEventListener('click', () => {
  return console.log(array1[1]);
  }
);

int3.addEventListener('click', () => {
  return console.log(array1[2]);
  }
);

int4.addEventListener('click', () => {
  return console.log(array1[3]);
  }
);

int5.addEventListener('click', () => {
  return console.log(array1[4]);
  }
);

int6.addEventListener('click', () => {
  return console.log(array1[5]);
  }
);

int7.addEventListener('click', () => {
  return console.log(array1[6]);
  }
);

int8.addEventListener('click', () => {
  return console.log(array1[7]);
  }
);

int9.addEventListener('click', () => {
  return console.log(array1[8]);
  }
);

int0.addEventListener('click', () => {
  return console.log(array1[9]);
  }
);

//operator buttons

const addButton = document.querySelector('.addButton');
const subtractButton = document.querySelector('.subtractButton');
const divideButton = document.querySelector('.divideButton');
const multiplyButton = document.querySelector('.multiplyButton');
const clearButton = document.querySelector('.clearButton');
const deleteButton = document.querySelector('.deleteButton');
const equalButton = document.querySelector('.equalButton');