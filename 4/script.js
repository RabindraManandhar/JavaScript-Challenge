window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    document.getElementById("popup").style.display = "block";
  } else {
    document.getElementById("popup").style.display = "none";
  }
}
