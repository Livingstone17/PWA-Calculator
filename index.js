

const display = document.querySelector('.display');

const Buttons = document.querySelector('.controls').children;

const allSymbols = ['+', '-', "%", "C", "=", "X",, "<-"];

let firstVal = '';
let secondVal = '';
let symbol = '';
let result = '';

const calculate = () => {
    firstVal = parseFloat(firstVal);
    secondVal = parseFloat(secondVal);

    if(symbol === '+') result = firstVal + secondVal;
    if(symbol === '-') result = firstVal - secondVal;
    if(symbol === '/') result = firstVal / secondVal;
    if(symbol === '-') result = firstVal - secondVal
    if(symbol === 'X') result = firstVal * secondVal;

    display.innerText = result;
    firstVal = result;
    secondVal = '';

}

// const backSpace = () => {
   
    
// }
for(let button of Buttons){
    button.addEventListener('click', ()=>{
        const {innerText: btnValue} = button;
        const btnValueIsSymbol = allSymbols.includes(btnValue);

        // if (btnValue === "<-"){
        //     // display.innerText.value.slice(0, display.innerText.value -1)
        //     firstVal = secondVal = symbol = ''
        //     var displayedValue = display.innerText;
           
        //     displayedValue = ''
        //     // displayedValue.slice(0,- 1);
        //     console.log("backspace clicked")
        // }

        if (!secondVal && btnValue === '=') return null
        if(btnValue === 'C'){
            firstVal = secondVal = symbol = ''
            return display.innerText = ''
        }
        if(firstVal && btnValueIsSymbol){
            secondVal && calculate()
            symbol = btnValue
        }
        else if(!symbol) {
            firstVal += btnValue;
        }else if(symbol) secondVal += btnValue;
        if(btnValue !== '=') display.innerText +=btnValue;
        // display.innerText += btnValue;
    })
}

// Todos

// 1. Improve on the UI of the app
// 2. Make the backspace and % button work.
// 3. Add currency converter to the calculator