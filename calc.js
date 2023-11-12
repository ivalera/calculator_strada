const ERROR_INPUT = "Введите число!";
const ERROR_ZERO = "На 0 делить нельзя!";
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
const resultBlock = document.getElementById('save-result');

const log = (value) => console.log(value);
const isValidate = (value) => isNaN(value) || value.trim() === '';

function calc(operation, num_one, num_two){
    switch(operation){
    case PLUS:
        return (num_one * 100 + num_two * 100) / 100;
    case MINUS:
        return (num_one * 100 - num_two * 100) / 100;
    case MULTIPLY:
        return num_one * num_two;
    case DIVIDE:
        let resultDivide = num_one / num_two;
        if (resultDivide === Infinity){
            return ERROR_ZERO;
        }
        return resultDivide;
    default:
      return 'HI';
    }
}

function saveResult(digitOne, digitTwo, result){
    const newElementResult = document.createElement('div');
    newElementResult.textContent = `${digitOne} + ${digitTwo} = ${result}`;
    newElementResult.style.marginTop = '5px';
    resultBlock.insertAdjacentElement('beforeend', newElementResult);
    newElementResult.addEventListener('click', () => {
        newElementResult.remove();
        newElementResult.removeEventListener("click", saveResult);
    });
}   

function resultCalculation(){
    const digitOne = firstDigit.value;
    const digitTwo = secondDigit.value;
    const sign = signSelect.options[signSelect.selectedIndex].value;
    if(sign === ''){
        resultOut.textContent = ERROR_SIGN;
    }else{
        if(!isValidate(digitOne) && !isValidate(digitTwo)){
            const result = calc(sign, +digitOne, +digitTwo); 
            resultOut.textContent = result;
            saveResult(digitOne, digitTwo, result);
        }else{
            resultOut.textContent = ERROR_INPUT;
        }
    }
}

btnResult.addEventListener('click', resultCalculation);
log('❤️');
