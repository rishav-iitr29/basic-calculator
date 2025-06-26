let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function displayCalculation(isError = false) {
  const displayElement = document.querySelector('.js-calculation');
  displayElement.innerHTML = calculation;
  displayElement.style.color = isError ? 'red' : 'white';
  displayElement.style.fontWeight = isError ? '700' : '400';
}

function updateCalculation(value){
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}
function evaluateCalculation() {
  try {
    calculation = Function('"use strict";return (' + calculation + ')')();
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  } catch (e) {
    calculation = 'Error';
    calculationElement = document.querySelector('.js-calculation');
    calculationElement.innerHTML = calculation;
    displayCalculation(true);

    setTimeout(() => {
      calculation = '';
      displayCalculation();
    }, 2000);
  }
}