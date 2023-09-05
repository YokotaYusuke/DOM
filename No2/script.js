"use strict";

const appleBtn = document.getElementById("apple");
const bananaBtn = document.getElementById("banana");
const mikanBtn = document.getElementById("mikan");

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");

let txt1 = "";
let txt2 = "";

let firstTxt1 = "直近１つ目：";
let firstTxt2 = "直近２つ目：";

appleBtn.addEventListener("click", function() {
  changeText("りんご");
});

bananaBtn.addEventListener("click", function() {
  changeText("バナナ");
});

mikanBtn.addEventListener("click", function() {
  changeText("みかん");
});


function changeText(str) {
  txt2 = txt1;
  txt1 = str;
  label1.innerHTML = firstTxt1 + txt1;
  label2.innerHTML = firstTxt2 + txt2;
  console.log("最新の文字を" + txt1 + "に変更しました");
}

