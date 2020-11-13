'use strict'

var display = document.querySelector(".display");

var inputString = "";

var keyboard = document.querySelector(".numbers");
var operators = document.querySelector(".operators");

var kNumbers = keyboard.querySelectorAll("div");
var keyOp = operators.querySelectorAll(":not(#CE)");

kNumbers.forEach( (el) => el.addEventListener("click",
getInput));

function getInput (evt) {
  inputString += evt.target.innerText;
  display.innerText = inputString;
}
