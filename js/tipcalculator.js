function myFunction() {
    var tip = document.getElementById("tip").value / 100;
    var subtotal = document.getElementById("subtotal").value;
    var result = tip * subtotal;
    document.getElementById("result").innerHTML = "$" + result.toFixed(2);
   }
  
  