"use strict";



const appleBtn = document.getElementById("apple");
const bananaBtn = document.getElementById("banana");
const mikanBtn = document.getElementById("mikan");

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");

let txt1 = "";
let txt2 = "";

appleBtn.addEventListener("click", function() {
  txt2 = txt1;
  txt1 = "りんご";
  label1.innerHTML = "直近１つ目：" + txt1;
  label2.innerHTML = "直近２つ目：" + txt2;
});


bananaBtn.addEventListener("click", function() {
  txt2 = txt1;
  txt1 = "バナナ";
  label1.innerHTML = "直近１つ目：" + txt1;
  label2.innerHTML = "直近２つ目：" + txt2;
});

mikanBtn.addEventListener("click", function() {
  txt2 = txt1;
  txt1 = "みかん";
  label1.innerHTML = "直近１つ目：" + txt1;
  label2.innerHTML = "直近２つ目：" + txt2;
});