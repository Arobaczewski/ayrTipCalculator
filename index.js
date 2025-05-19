const display = document.getElementById("display");
// number buttons
const appendToDisplay = (input) => {
    display.value += input;
};

//clear button
function clearDisplay(){
    display.value = '';
};

//backspace button
function backspace(){
    let value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
};
// save tips

const saveTips = () => {
    const tipsList = document.getElementById('tips-list');
    const tipsArr = Array.from(tipsList.querySelectorAll('li')).map(li => ({
        tipAmount: li.querySelector('span').textContent
    }));
    localStorage.setItem('tips', JSON.stringify(tipsArr));
};

// load tips

const loadTips = () => {
    const savedTips = JSON.parse(localStorage.getItem('tips')) || [];
    savedTips.forEach(tip => addTipItem(tip.tipAmount));
};


// collect tips
const collectTips = (appendToDisplay) => {


    let value = parseFloat(document.getElementById("display").value);

    if (isNaN(value) || value <= 0) {
        alert("Please enter a valid tip amount");
        return
    }

    const backOfHouseIncluded = document.getElementById('yes').checked;
    let fullTimeEmployees = parseInt(document.getElementById('fullTime').value) || 0;
    let partTimeEmployees = parseInt(document.getElementById('partTime').value) || 0;

    if (fullTimeEmployees <= 0 && partTimeEmployees <= 0) {
        alert("Please enter at least one employee");
        return
    }

    const hoursValue = document.getElementById('hours').value;
    const hours = hoursValue >= 100 ? parseFloat(hoursValue) / 100 : parseFloat(hoursValue);
    const partTimeHours = partTimeEmployees * 5.5;
    const fullTimeHours = fullTimeEmployees * 8;
    const totalHours = partTimeHours + fullTimeHours;
    const tipsList = document.getElementById('tips-list');

    const backOfHouseValue = () => {
        if (backOfHouseIncluded) {
            return value * .85
        } else {
            return value
        }
    };
    const adjustedValue = backOfHouseValue();
    const tipsHoursCalc = (adjustedValue / totalHours) * hours;


    addTipItem(tipsHoursCalc);
    clearDisplay();
    };

// Tips List

    const addTipItem = (tipAmount) => {
    const tipsList = document.getElementById('tips-list');
    const li = document.createElement('li');
    li.innerHTML = `
    <input type="text" class="tips" hidden>
    <span>${parseFloat(tipAmount).toFixed(2)}</span>
    <div class="tips-btns">
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;

    const tips = li.querySelector('.tips');

    // Delete Tips button

    li.querySelector('.delete-btn').addEventListener("click", () => {
        li.remove();
        saveTips();
    });


    tipsList.appendChild(li);

    saveTips();
};

// Total Tips
const updatedTotalTips = () => {
    const tipsList = document.getElementById('tips-list');
    const tipsSpans = tipsList.querySelectorAll('span');
    let total = 0;

    tipsSpans.forEach(span => {
        const tipValue = parseFloat(span.textContent.replace('$', ''));
        if (!isNaN(tipValue)) {
            total += tipValue;
        }
    });

    const tipsTotal = document.getElementById('tips-total');
    tipsTotal.textContent = `Total: $${total.toFixed(2)}`;
};


//clear tips

function clearTips(){
    document.getElementsByClassName('tips-btn').textContent = '';
};


loadTips();