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
// adding number buttons

const int1 = document.createElement('button');
container.appendChild(int1);
int1.classList.add('int1');
int1.textContent = "1";

const int2 = document.createElement('button');
container.appendChild(int2);
int2.classList.add('int2');
int2.textContent = "2";

const int3 = document.createElement('button');
container.appendChild(int3);
int3.classList.add('int3');
int3.textContent = "3";

const int4 = document.createElement('button');
container.appendChild(int4);
int4.classList.add('int4');
int4.textContent = "4";

const int5 = document.createElement('button');
container.appendChild(int5);
int5.classList.add('int5');
int5.textContent = "5";

const int6 = document.createElement('button');
container.appendChild(int6);
int6.classList.add('int6');
int6.textContent = "6";

const int7 = document.createElement('button');
container.appendChild(int7);
int7.classList.add('int7');
int7.textContent = "7";

const int8 = document.createElement('button');
container.appendChild(int8);
int8.classList.add('int8');
int8.textContent = "8";

const int9 = document.createElement('button');
container.appendChild(int9);
int9.classList.add('int9');
int9.textContent = "9";

const int0 = document.createElement('button');
container.appendChild(int0);
int0.classList.add('int0');
int0.textContent = "0";
