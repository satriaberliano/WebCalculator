const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
  calculatorScreen.value = number;
}


const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  })
});


let prevNumber = '';
let currentNumber  = '0';
let calculationOperator = '';

const inputNumber = (number) => {
  if (currentNumber === "0"){
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};


const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  })
});


const inputOperator = (operator) => {
  if (calculationOperator === ""){
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
}


const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});


const calculate= () => {
  let result = '';
  if(calculationOperator == "+") {
    result = parseFloat(prevNumber) + parseFloat(currentNumber);
  } else if (calculationOperator == "-") {
    result = parseFloat(prevNumber) - parseFloat(currentNumber);
  } else if (calculationOperator == "*") {
    result = parseFloat(prevNumber) * parseFloat(currentNumber);
  } else {
    result = parseFloat(prevNumber) / parseFloat(currentNumber);
  }

  const history = {
    firstNumber: prevNumber,
    secondNumber: currentNumber,
    operator: calculationOperator,
    result: result
  }

  putHistory(history);
  renderHistory();

  currentNumber = result;
  calculationOperator = "";
}


const clearButton = document.querySelector('.all-clear');
clearButton.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
}


const decimal = document.querySelector('.decimal');
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
  if(currentNumber.includes(".")){
    return;
  }
  currentNumber += dot;
};


const percentage = document.querySelector('.percentage');
percentage.addEventListener("click", () => {
  percentageOperate();
  updateScreen(currentNumber);
})

const percentageOperate = () => {
  let result = "";
  result = parseFloat(currentNumber) / 100;
  currentNumber = result;
}