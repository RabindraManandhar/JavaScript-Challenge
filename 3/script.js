// This is for distance-bound animation

let a = 0;
let circle = document.createElement("div");
let place = document.getElementById("place");
place.appendChild(circle);
var timer;

function myTimer() {
  timer = setInterval(task_3, 20);
}

function task_3() {
  if (a < 300) {
    circle.setAttribute("style", "width: 200px; height:200px; background-color:red; border-radius:100px; position:absolute;   top: 140px; left:" + [a] + "px");
    a++;
  } else {
    clearInterval(timer);
  }
  console.log(a);
}

// This is for time-bound animation

// circle.onclick = function() {
//   let start = Date.now();
//
//   let timer = setInterval(function() {
//     let timePassed = Date.now() - start;
//     circle.style.left = timePassed / 5 + 'px';
//     if (timePassed > 2000) clearInterval(timer);
//   }, 20);
// }
