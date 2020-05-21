var fruits = ['apple', 'banana', 'bar', 'cherries', 'grapes', 'lemon', 'melon', 'orange']

var credits = document.getElementById("credits");
var winnings = document.getElementById("winnings");

var slot1 = document.getElementById("slot1");
var slot2 = document.getElementById("slot2");
var slot3 = document.getElementById("slot3");

var message = document.getElementById("message");

var spin = document.getElementById("spin");
var collect = document.getElementById("collect");

var creditsValue = 0;
var winningsValue = 0;

displayImages(randomValue(), randomValue(), randomValue());
updateDisplay();

function spinWheel() {
    message.innerText = "";
    creditsValue -= 1;

    var val1 = randomValue();
    var val2 = randomValue();
    var val3 = randomValue();

    displayImages(val1, val2, val3);

    if(val1 === val2 && val1 === val3 && val1 !== null){
        winningsValue += 10;
        message.innerText = "You have won 10 coins!!";
    } else if (val2 === val3  && val2 !== null) {
        winningsValue += 5;
        message.innerText = "You have won 5 coins!!";
    }
    updateDisplay();
}

function creditAccount() {
    creditsValue += 1;
    updateDisplay();
}

function collectWinnings() {
    message.innerText = "You have collected " + winningsValue + " coins";
    winningsValue = 0;
    updateDisplay();
}

function displayImages(ran1, ran2, ran3) {
    slot1.src = "src/img/" + fruits[ran1] + ".png";
    slot2.src = "src/img/" + fruits[ran2] + ".png";
    slot3.src = "src/img/" + fruits[ran3] + ".png";
}

function randomValue() {
    return Math.floor(Math.random() * fruits.length)
}

function updateDisplay() {
    credits.innerText = creditsValue.toString();
    winnings.innerText = winningsValue.toString();

    spin.disabled = creditsValue === 0;

    collect.disabled = winningsValue === 0;
}