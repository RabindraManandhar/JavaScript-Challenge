function myFunction() {
  let txt;
  let r = confirm("Do you know a bit already about Javascript?");
  if (r == true) {
    console.log(":)");
  } else {
    console.log("You need to learn it!");
  }
}

window.onload = myFunction();
