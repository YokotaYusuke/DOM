"use strict";

const changeColorBtn1 = document.getElementById("change-backcolor1");
const changeColorBtn2 = document.getElementById("change-backcolor2");
const changeColorBtn3 = document.getElementById("change-backcolor3");

const resetBtn1 = document.getElementById("action-reset1");
const resetBtn2 = document.getElementById("action-reset2");
const resetBtn3 = document.getElementById("action-reset3");


changeColorBtn1.addEventListener("click", function() {
  document.getElementById("box1").classList.add("redBox");
});

resetBtn1.addEventListener("click", function() {
  document.getElementById("box1").classList.remove("redBox");
});


changeColorBtn2.addEventListener("click", function() {
  document.getElementById("box2").classList.add("blueBox");
});

resetBtn2.addEventListener("click", function() {
  document.getElementById("box2").classList.remove("blueBox");
});

changeColorBtn3.addEventListener("click", function() {
  document.getElementById("box3").classList.add("greenBox");
});

resetBtn3.addEventListener("click", function() {
  document.getElementById("box3").classList.remove("greenBox");
});


















