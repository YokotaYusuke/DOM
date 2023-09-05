"use strict";


// No,1


const appleButton = document.getElementById("apple");
const bananaButton = document.getElementById("banana");
const mikanButton = document.getElementById("mikan");



appleButton.addEventListener("click", function() {
  document.getElementById("txt").innerHTML = "りんご";
  console.log("文字をりんごに変更しました");
});


bananaButton.addEventListener("click", function() {
  document.getElementById("txt").innerHTML = "バナナ";
  console.log("文字をバナナに変更しました");
});


mikanButton.addEventListener("click", function() {
  document.getElementById("txt").innerHTML = "みかん";
  console.log("文字をみかんに変更しました");
});



// No,2















