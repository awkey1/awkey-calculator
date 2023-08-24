window.onload=function(){

const display = document.getElementById("display");

const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backs");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

const add = document.getElementById("addi");
const subtract = document.getElementById("subt");
const multiply = document.getElementById("mult");
const divide = document.getElementById("divi");
const remainder = document.getElementById("modu");

const equals = document.getElementById("equa");

function putOne() {
    display.innerHTML += "1";
}
function putTwo() {
    display.innerHTML += "2";
}
function putThree() {
    display.innerHTML += "3";
}
function putFour() {
    display.innerHTML += "4";
}
function putFive() {
    display.innerHTML += "5";
}
function putSix() {
    display.innerHTML += "6";
}
function putSeven() {
    display.innerHTML += "7";
}
function putEight() {
    display.innerHTML += "8";
}
function putNine() {
    display.innerHTML += "9";
}
function putZero() {
    display.innerHTML += "0";
}

function putPlus() {
    display.innerHTML += "+";
}
function putMinus() {
    display.innerHTML += "-";
}
function putTimes() {
    display.innerHTML += "*";
}
function putDivBy() {
    display.innerHTML += "/";
}
function putMod() {
    display.innerHTML += "%";
}

function clearDisplay() {
    display.innerHTML = "";
}
function backspace() {
    let x = display.innerHTML;
    x = x.substring(0, x.length-1);
    display.innerHTML = x;
}

function result() {
    let x = display.innerHTML;
    x = eval(x);
    display.innerHTML = x;
}

one.addEventListener("click", putOne);
two.addEventListener("click", putTwo);
three.addEventListener("click", putThree);
four.addEventListener("click", putFour);
five.addEventListener("click", putFive);
six.addEventListener("click", putSix);
seven.addEventListener("click", putSeven);
eight.addEventListener("click", putEight);
nine.addEventListener("click", putNine);
zero.addEventListener("click", putZero);

add.addEventListener("click", putPlus);
subtract.addEventListener("click", putMinus);
multiply.addEventListener("click", putTimes);
divide.addEventListener("click", putDivBy);
remainder.addEventListener("click", putMod);

clearButton.addEventListener("click", clearDisplay);
backspaceButton.addEventListener("click", backspace);

equals.addEventListener("click", result);

}