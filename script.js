const mainContainer = document.getElementById("#main-container");
const resultsDiv = document.getElementById("#results-container");

const buttonone = document.getElementById("#buttonone");
const buttontwo = document.getElementById("#buttonTwo");
const buttonthree = document.getElementById("#buttonThree");
const buttonfour = document.getElementById("#buttonFour");
const buttonfive = document.getElementById("#buttonFive");
const buttonsix = document.getElementById("#buttonSix");
const buttonseven = document.getElementById("#buttonSeven");
const buttoneight = document.getElementById("#buttonEight");
const buttonnine = document.getElementById("#buttonNine");
const buttonzero = document.getElementById("#buttonZero");
const buttonPlus = document.getElementById("#buttonPlus");
const buttonMinus = document.getElementById("#buttonMinus");
const buttonMultiply = document.getElementById("#buttonMultiply");
const buttonDivide = document.getElementById("#buttonDivide");
const buttonEquals = document.getElementById("#buttonEquals");
const buttonClear = document.getElementById("#buttonCE");

let calculationArray = [];

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function buttonEventListeners() {
    buttonOne.addEventListener("click", () => {
        calculationArray.push(1);
        console.log(calculationArray);
    });
    buttonTwo.addEventListener("click", () => {
        calculationArray.push(2);
        console.log(calculationArray);
    });
    buttonThree.addEventListener("click", () => {
        calculationArray.push(3);
        console.log(calculationArray);
    });
    buttonFour.addEventListener("click", () => {
        calculationArray.push(4);
        console.log(calculationArray);
    });
    buttonFive.addEventListener("click", () => {
        calculationArray.push(5);
        console.log(calculationArray);
    });
    buttonSix.addEventListener("click", () => {
        calculationArray.push(6);
        console.log(calculationArray);
    });
    buttonSeven.addEventListener("click", () => {
        calculationArray.push(7);
        console.log(calculationArray);
    });
    buttonEight.addEventListener("click", () => {
        calculationArray.push(8);
        console.log(calculationArray);
    });
    buttonNine.addEventListener("click", () => {
        calculationArray.push(9);
        console.log(calculationArray);
    });
    buttonZero.addEventListener("click", () => {
        calculationArray.push(0);
        console.log(calculationArray);
    });
    // ADD THE OPERATIONS TOO
}

buttonEventListeners();

/* Have the buttons store their thingys in a single array and show up on screen
computer looks at array and uses operator at array[1] to merge numbers at array[0 and 2].
When press equals, calculate that and then show on screen, clear array and push to array[0]; */