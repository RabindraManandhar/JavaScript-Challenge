let index = 1;

setInterval(function(){
  if (index < 4){
    index++;
  } else {
    index = 1;
  }
document.getElementById("image").style.backgroundImage =
'url(runner/runner' + index +'.png)'},60);
