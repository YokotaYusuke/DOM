"use strict";


const lab1 = document.getElementById("lab1");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


const firstTxt = "値:";
let addNumber = 0;

btn1.addEventListener("click", function() {
  changeNum(0);
})

btn2.addEventListener("click", function() {
  changeNum(1);
})

btn3.addEventListener("click", function() {
  changeNum(-1);
})


function changeNum(num) {
  num === 0 ? addNumber = 0 : addNumber += num;
  lab1.innerHTML = firstTxt + addNumber;
  console.log("最新の値を" + addNumber + "に変更しました。");
}




