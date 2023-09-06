"use strict";


const inputNum1 = document.getElementById("input-num1");
const execute1 = document.getElementById("execute-1");
const reset1 = document.getElementById("reset-1");
const result = document.getElementById("result");

const arr = [];
const firstStr = "結果:";

execute1.addEventListener("click", function() {
  arr.splice(0);
  const count = document.getElementById("input-num1").value;

  for(let i = 0; i < count; i++) {
    let str = window.prompt("値を入力してください。");
    arr.push(str);
  }
  const message = arr.join("");
  result.innerHTML = firstStr + message;
})


reset1.addEventListener("click", function() {
  result.innerHTML = "結果:";
  arr.splice(0);
})


