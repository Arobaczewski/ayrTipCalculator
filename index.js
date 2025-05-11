const display = document.getElementById("display");
let tipsList = [];
// number buttons
const appendToDisplay = (input) => {
    display.value += input;
}

//clear button
function clearDisplay(){
    display.value = '';
}

//backspace button
function backspace(){
    let value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}
// save tips


// collect tips
const collectTips = (appendToDisplay) => {
    const value = document.getElementById("display").value;
    const backOfHouse = prompt('How many BoH worked today?');
    const bohDeduction = value * .85;
    const employees = prompt('How many FoH worked today?');
    const tipsTotal = value / employees;
}

const tipsList = ([]) => {
    if (backOfHouse > 0) {
        
    }
} 

//rendering tips





//clear tips

function clearTips(){
    document.getElementById('tips').textContent = '';
}

function totalTips(){
    sumOfTips = sum(tips);
    document.getElementById('tip-header').textContent = sumOfTips;
}

