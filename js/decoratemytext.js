var myButton = document.getElementById("button").onclick = myFunction;


function myfunction() {
  setInterval(myFunction, 500);
}

function myFunction() {  
 let curFontSize = window.getComputedStyle(document.getElementById("textarea")).fontSize;
 var newSize = parseInt(curFontSize) + 2 + "px"; 
 document.getElementById("textarea").style.fontSize = newSize;
}

function check() {
  let inputs = document.getElementById('checkId');
  inputs.checked = true;
  document.getElementById("textarea").style.fontWeight = "bold";
  document.getElementById("textarea").style.color = "green";
  document.getElementById("textarea").style.textDecoration = "underline";
  document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
}
      
function uncheck() {
  let inputs = document.getElementById('checkId');
  inputs.checked = false;
  document.getElementById("textarea").style.fontWeight = "normal";
  document.getElementById("textarea").style.color = "black";
  document.getElementById("textarea").style.textDecoration = "none";
  document.body.style.backgroundImage = "none";
} 





window.onload = function() {
    window.addEventListener('load', check, false);
}






