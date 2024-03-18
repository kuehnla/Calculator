function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const addOp = "+";
const subOp = "-";
const mulOp = "*";
const divOp = "/";

function operate(a, b, op) {
  switch (op) {
    case "+" : return add(a, b);
    case "-" : return sub(a, b);
    case "*" : return mul(a, b);
    case "/" : return divide(a, b);
    defualt : return null;
  }
}

let operandA = "", operandB = "", operator;

const operands = document.querySelectorAll(".opand");
const display = document.querySelector("#display");

operands.forEach((operand) => {
  if (operand.id.match(/[0-9]/)) {
    operand.addEventListener("click", function (e) {
      operator == null ? operandA += operand.id : operandB += operand.id;
      display.textContent = operandA;
    });
  }
});

// operators.forEach((operand) => {

// });