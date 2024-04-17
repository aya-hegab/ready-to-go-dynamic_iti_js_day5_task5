var input = document.querySelector("input");
var cRed = document.getElementById("red");
var cYellow = document.getElementById("yellow");
var cGreen = document.getElementById("green");
var all = document.querySelectorAll(".c");

// function changeColor() {
//   cRed.classList.remove("c-red");
//   cYellow.classList.remove("c-yellow");
//   cGreen.classList.remove("c-green");

//   if (input.value == 1) {
//     cRed.classList.add("c-red");
//   } else if (input.value == 2) {
//     cYellow.classList.add("c-yellow");
//   } else if (input.value == 3) {
//     cGreen.classList.add("c-green");
//   }
//   console.log(cRed);
// }
// function dynamicStart() {

//   cRed.classList.add("c-red");
// }();
setInterval(function () {
  setTimeout(function () {
    cGreen.classList.remove("c-green");
    cRed.classList.add("c-red");
  }, 1000);
  setTimeout(function () {
    cRed.classList.remove("c-red");
    cYellow.classList.add("c-yellow");
  }, 2000);
  setTimeout(function () {
    cYellow.classList.remove("c-yellow");
    cGreen.classList.add("c-green");
  }, 3000);
}, 4000);
