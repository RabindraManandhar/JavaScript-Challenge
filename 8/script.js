function transformString() {
  let string = document.getElementById("demo").innerHTML;
  let replace = string.replace(/e/g, "o");
  document.getElementById("demo").innerHTML = replace;
}
