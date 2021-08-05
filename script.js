const mainContainer = document.getElementById("#main-container");


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
const buttonplus = document.getElementById("#buttonPlus");
const buttonminus = document.getElementById("#buttonMinus");
const buttonmultiply = document.getElementById("#buttonMultiply");
const buttondivide = document.getElementById("#buttonDivide");
const buttonequals = document.getElementById("#buttonEquals");
const buttonclear = document.getElementById("#buttonCE");


//calculationArray holds all numbers before an operator is requested. It then pushes the merged number to finalArray with the operator, then waits to receive the next number.

//displayArray holds everything that is being displayed to the user on the calculator display.

// finalArray hold the final number (1 or more digits) and the operator.
let calculationArray = [];
let displayArray = [];
let finalArray = [];

// shouldClear is for the display showing 0 at first, becomes false after first number is input and does not become true until clear is input.

// when alreadyCalculated is true, program will do a midway calculation, i.e. before equals is input. Will trigger after the second operator is input.
let shouldClear = true;
let alreadyCalculated = false;

function updateResults(content) {
    const resultsDiv = document.querySelector("#results-container");
    const oldResults = document.querySelector("#results");

    displayArray.push(content);
    
    if (shouldClear === true) {
        oldResults.textContent = displayArray.join("");
        shouldClear = false;
    } else {
        oldResults.textContent = displayArray.join("");
        console.log(oldResults.textContent);
    }

}

function clearResults() {
    const resultsDiv = document.querySelector("#results-container");
    const oldResults = document.querySelector("#results");
    let newResults = document.createElement("h1");

    oldResults.textContent = 0;
    displayArray = [];
    calculationArray = [];
    finalArray = [];
    console.log("Calculator Cleared!")
    shouldCLear = true;
    
}

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

function operate(num1, num2, operator) {
    if (operator === "plus") {
        return add(num1, num2);
    } else if (operator === "minus") {
        return subtract(num1, num2);
    } else if (operator === "multiply") {
        return multiply(num1, num2);
    } else if (operator === "divide") {
        return divide(num1, num2);
    } else {
        console.log("ERROR");
        clearResults();
    }
}

function finalCalculate() {
    let firstNumber = Number(finalArray[0]);
    let operator = finalArray[1];
    let secondNumber = Number(finalArray[2]);
    let finalResult = operate(firstNumber, secondNumber, operator);
    displayArray = [];

    finalArray[0] = finalResult;
    finalArray[1] = null;
    finalArray.splice(2);
    updateResults(finalResult);
}

function collateNumbers() {
    finalArray.push(calculationArray.join(""));
    calculationArray = [];
}

function buttonEventListeners() {
    buttonOne.addEventListener("click", () => {
        calculationArray.push(1);
        updateResults(1);
        console.log(calculationArray);
    });
    buttonTwo.addEventListener("click", () => {
        calculationArray.push(2);
        updateResults(2);
        console.log(calculationArray);
    });
    buttonThree.addEventListener("click", () => {
        calculationArray.push(3);
        updateResults(3);
        console.log(calculationArray);
    });
    buttonFour.addEventListener("click", () => {
        calculationArray.push(4);
        updateResults(4);
        console.log(calculationArray);
    });
    buttonFive.addEventListener("click", () => {
        calculationArray.push(5);
        updateResults(5);
        console.log(calculationArray);
    });
    buttonSix.addEventListener("click", () => {
        calculationArray.push(6);
        updateResults(6);
        console.log(calculationArray);
    });
    buttonSeven.addEventListener("click", () => {
        calculationArray.push(7);
        updateResults(7);
        console.log(calculationArray);
    });
    buttonEight.addEventListener("click", () => {
        calculationArray.push(8);
        updateResults(8);
        console.log(calculationArray);
    });
    buttonNine.addEventListener("click", () => {
        calculationArray.push(9);
        updateResults(9);
        console.log(calculationArray);
    });
    buttonZero.addEventListener("click", () => {
        if (!shouldClear) {
            calculationArray.push(0);
            updateResults(0);
        }
        console.log(calculationArray);
    });

    buttonPlus.addEventListener("click", () => {
        
        if (!alreadyCalculated) {
            collateNumbers();
            finalArray[1] = ("plus");
            alreadyCalculated = true;
        }  else {
            finalArray[1] = ("plus");
        }
        
        updateResults(" + ");
        console.log(calculationArray);
    });
    buttonMinus.addEventListener("click", () => {
        finalArray[1] = ("minus");
        updateResults(" - ");
        console.log(calculationArray);
    });
    buttonMultiply.addEventListener("click", () => {
        finalArray[1] = ("multiply");
        updateResults(" * ");
        console.log(calculationArray);
    });
    buttonDivide.addEventListener("click", () => {
        finalArray[1] = ("divide");
        updateResults(" ÷ ");
        console.log(calculationArray);
    });

    buttonCE.addEventListener("click", () => {
        clearResults();
    })
    buttonEquals.addEventListener("click", () => {
        collateNumbers();
        finalCalculate();
    })
    
}

buttonEventListeners();

// Adding WORKS!!! you can press equals then immediately add again and it works!
// do that for all the other operations
// then figure out how to do multiple operations at the same time then press enter while still showing the halfway equation as solved.