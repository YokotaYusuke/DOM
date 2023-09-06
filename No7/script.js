"use strict";



const btn1 = document.getElementById("color-btn1");
const btn2 = document.getElementById("color-btn2");
const btn3 = document.getElementById("color-btn3");

// 初期値
btn1.classList.add("selectBtn");


btn1.addEventListener("click", function() {
  this.classList.add("selectBtn");
  btn2.classList.remove("selectBtn");
  btn3.classList.remove("selectBtn");
});

btn2.addEventListener("click", function() {
  this.classList.add("selectBtn");
  btn1.classList.remove("selectBtn");
  btn3.classList.remove("selectBtn");
});


btn3.addEventListener("click", function() {
  this.classList.add("selectBtn");
  btn1.classList.remove("selectBtn");
  btn2.classList.remove("selectBtn");
});