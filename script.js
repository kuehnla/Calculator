function add(a, b) {
  return +(Number(a) + Number(b)).toFixed(3);
}

function sub(a, b) {
  return +(Number(a) - Number(b)).toFixed(3);
}

function mul(a, b) {
  return +(Number(a) * Number(b)).toFixed(3);
}

function divide(a, b) {
  return +(Number(a) / Number(b)).toFixed(3);
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
    default : return operandB != null ? operandB : operandA != null ? operandA : 0;
  }
}

let operandA = "", operandB = "", operator = "";
let resultMode = false;
let float = false;

const operands = document.querySelectorAll(".opand, .zero");
const display = document.querySelector("#display");
const operators = document.querySelectorAll(".op");

operands.forEach((operand) => {
  if (operand.id.match(/[0-9]/)) {
    operand.addEventListener("click", function (e) {

      if (operator == "" && operandA.length <= 10) {
        if (!resultMode){
          operandA += operand.id;
        } else {
          operandA = operand.id;
          resultMode = false;
        }

        display.textContent = operandA;
      } else if (operator != "" && operandB.length <= 10) {
        operandB += operand.id;
        display.textContent = operandB;
      }
    });
  } else if (operand.id == "clear") {
    operand.addEventListener("click", function (e) {
      operandA = "";
      operandB = "";
      operator = "";
      display.textContent = "";
      resultMode = false;
      float = false;
    });
  } else if (operand.id == "decimal") {
    operand.addEventListener("click", function(e) {
      if (!float) {
        float = true;
        display.textContent += ".";
        if (operandB != "") {
          operandB += ".";
        } else {
          operandA += ".";
        }
      }
    });
  } else if (operand.id == "sign") {
    operand.addEventListener("click", function(e) {
      if (operandB != "") {
        operandB = String(-1 * operandB);
        display.textContent = operandB;
      } else {
        operandA = String(-1 * operandA);
        display.textContent = operandA;
      }
    });
  } // TODO: sign, percent
});

operators.forEach((op) => {
  op.addEventListener("click", function (e) {
    if (operandA != "") {
      if (op.id == "equals") {
        const result = operate(operandA, operandB, operator);
        display.textContent = result;
        operandA = String(result);
        operandB = "";
        operator = "";
        resultMode = true;
      } else if (operandA.length <= 15) {
        operator = op.id;
        display.textContent = operator;
        resultMode = false;
        float = false;
      }
    }
    console.log(operandA.length)
  });
});