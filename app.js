



window.onload = function () {
    let clickDiv = document.getElementById("click-div");
    clickDiv.onclick = incrementClick;

    let resetBtn = document.getElementById("reset-button");
    resetBtn.onclick = resetCounter;

    let multiBtn = document.getElementById("multiply-btn");
    multiBtn.onclick = multiplierClick;
}

// Counter variable
let counterVal = 0;


// Increment by one
function incrementClick() {
    updateDisplay(++counterVal);
}

// multiply by counter by 2
function multiplierClick() {
   updateDisplay(counterVal *= 2);
}

// function to reset the counter to 0 and calls updatedisplay function
function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}


// TO UPDATE THE COUNTER

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}