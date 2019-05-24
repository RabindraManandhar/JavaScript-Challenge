let index = 0;

setInterval(function countNumber() {

  if (index <= 99) {
    index++;
  } else {
    index = 0;
  }
  console.log(index);

}, 120);

console.log(index);
