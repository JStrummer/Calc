'use strict'

// get HTML element
var display = document.querySelector(".display");

var keyNumbers = document.querySelectorAll(".num");

var keyOps = document.querySelectorAll(".op");

var keyTotal = document.getElementById("equal");

var keyCE = document.getElementById("CE");

var keyComma = document.getElementById("comma");

function getInput (evt) {
  inputs.push(evt.target.innerText);
  display.innerText = displayInput();
}

// handling inouts
var inputs = ["01"];

function reset (array) {
  array = ["0"];
}

function lastChar(array) {
  var lastInput = array[array.length - 1];
  return lastInput[lastInput.length - 1];
}

function deleteLastChar (array) {
  var lastInput = array[array.length - 1];
  lastInput = lastInput.slice(0, lastInput.length - 1);
}