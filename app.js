



window.onload = function () {
    let clickDiv = document.getElementById("click-div");
    clickDiv.onclick = incrementClick;

    let resetBtn = document.getElementById("reset-button");
    resetBtn.onclick = resetCounter;

   
    let multiBtn = document.getElementById("multiply-btn");
     multiBtn.onclick = multiplierClick;
     
    let buyCre = document.getElementById("buy");
    buyCre.onclick = buyCredit;

}

// Counter variable
let counterVal = 0;

// Counter variable for credits
let counterVal2 = 0


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


// TO UPDATE THE SCORE COUNTER

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}


// TO UPDATE THE CREDITS COUNTER

function updateCredits(val) {
    document.getElementById("countercredits").innerHTML = val;
}


// Buying credits from score to store in credits button

function buyCredit() {
if (counterVal >= 2) {
    updateDisplay(counterVal -= 2);
    updateCredits(counterVal2 *= 2);
}

}


// CREATING CLICK CREDITS FUNCTIONALITY


    


