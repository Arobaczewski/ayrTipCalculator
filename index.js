const display = document.getElementById("display");
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
    let value = document.getElementById("display").value;
    const backOfHouseIncluded = document.getElementById('yes').checked;
    let fullTimeEmployees = parseInt(document.getElementById('fullTime').value) || 0;
    let partTimeEmployees = parseInt(document.getElementById('partTime').value) || 0;
    const hours = parseFloat(document.getElementById('hours').value);
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






    const li = document.createElement('li');
    li.innerHTML = `
    <input type="text" class="tips" hidden>
    <span>${tipsHoursCalc}</span>
    <div class="tips-btns">
        <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;

    const tips = li.querySelector('.tips');
    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');


    
    tipsList.appendChild(li);


    
    }

// Total Tips



//clear tips

function clearTips(){
    document.getElementsByClassName('tips-btn').textContent = '';
}
