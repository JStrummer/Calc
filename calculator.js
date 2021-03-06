'use strict'

// handling inputs
var inputs = {
  entry: ['0'],
  operators: ['+', '-', '/', '*'],
  operation: {
    '+'(a) {
      return (b) => a + b;
    },
    '-'(a) {
      return (b) => a - b;
    },
    '/'(a) {
      return (b) => a / b;
    },
    '*'(a) {
      return (b) => a * b;
    },
  },

  getTotal () {
    var calculate  = (total, entry) => {
      if (this.operators.includes(entry)) {
        return this.operation[entry](Number(total));
      } else {
        return total(Number(entry));
      }
    }

    if (this.operators.includes(this.last)) {
      this.entry.pop();
    }
    display.innerText = this.entry.reduce(calculate);
    this.entry = ['0'];
  },

  addOp (input) {
    if (!this.operators.includes(this.last)) {
      this.entry.push(input);
    } else {
      this.last = input;
    }
    updateDisplay(this.entry);
  },

  addNumber (input) {
    if (this.last === '0') {
      if (Number(input) > 0) {
        this.last = input;
      }
    } else if (this.operators.includes(this.last)) {
      this.entry.push(input);
    } else {
      this.last += input;
    }
    updateDisplay(this.entry);
  },

  addComma () {
    if (!this.last.includes('.')) {
      if (this.operators.includes(this.last)) {
        this.entry.push('0.');
      } else {
        this.last += '.';
      }
      updateDisplay(this.entry);
    }
  },

  get last () {
    return this.entry[this.entry.length - 1];
  },
  set last (value) {
    this.entry[this.entry.length - 1] = value;
  }

}

// get HTML element
var display = document.querySelector(".display");
function updateDisplay (input) {
  display.innerText = input.join('');
}

var keyNumbers = document.querySelectorAll(".num");
keyNumbers.forEach((el) => {
  el.addEventListener('click', inputNumber);
});
function inputNumber(evt) {
  inputs.addNumber(evt.target.innerText);
}

var keyOps = document.querySelectorAll(".op");
keyOps.forEach((el) => {
  el.addEventListener('click', inputOp)
});
function inputOp(evt) {
  inputs.addOp(evt.target.innerText);
}


var keyTotal = document.getElementById("equal");
keyTotal.addEventListener('click', getTotal);
function getTotal(evt) {
  inputs.getTotal();
}
var keyCE = document.getElementById("CE");
var keyComma = document.getElementById("comma");
keyComma.addEventListener('click', inputComma);
function inputComma(evt) {
  inputs.addComma();
}
