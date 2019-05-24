window.addEventListener("resize", function() {
let height = document.getElementById("div1").clientHeight;
let width = document.getElementById("div2").clientWidth;


document.getElementById("div1").style.height = width + "px";
console.log(height);
console.log(width);
});
