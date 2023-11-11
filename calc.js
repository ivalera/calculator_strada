const ERROR_MESSAGE = "Введите число!";
const ERROR_SIGN = "Выберите знак!";

const PLUS = "plus";
const MINUS = "minus";
const MULTIPLY = "multiply";
const DIVIDE = "divide";

const firstDigit = document.getElementById('digit-one-get');
const secondDigit = document.getElementById('digit-two-get');
const signSelect = document.getElementById('sign-select');
const btnResult = document.getElementById('result-btn');
const resultOut = document.getElementById('result-digit');

const log = (value) => console.log(value);
const isValidate = (value) => isNaN(value) || value.trim() === '';

function calc(operation, num_one, num_two){
    switch(operation){
    case PLUS:
        return Math.round((num_one + num_two) * 10) / 10;
    case MINUS:
        return Math.round((num_one - num_two) * 10) / 10;
    case MULTIPLY:
        return num_one * num_two;
    case DIVIDE:
        return num_one / num_two;
    default:
      return ERROR_MESSAGE;
    }
}

function resultCalculation(){
    const digitOne = firstDigit.value;
    const digitTwo = secondDigit.value;
    const sign = signSelect.options[signSelect.selectedIndex].value;
    if(sign === ''){
        resultOut.textContent = ERROR_SIGN;
    }else{
        if(!isValidate(digitOne) && !isValidate(digitTwo)){
            resultOut.textContent = calc(sign, +digitOne, +digitTwo);
        }else{
            resultOut.textContent = ERROR_MESSAGE;
        }
    }
}

btnResult.addEventListener('click', resultCalculation);
