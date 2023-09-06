"use strict";


const box1 = document.getElementById("hover-box1");
const box2 = document.getElementById("hover-box2");
const box3 = document.getElementById("hover-box3");


box1.addEventListener("mousemove", function() {
  this.classList.add("red");
});

box1.addEventListener("mouseout", function() {
  this.classList.remove("red");
});


box2.addEventListener("mousemove", function() {
  this.classList.add("blue");
});


box2.addEventListener("mouseout", function() {
  this.classList.remove("blue");
});


box3.addEventListener("mousemove", function() {
  this.classList.add("yellow");
});

box3.addEventListener("mouseout", function() {
  this.classList.remove("yellow");
});

























