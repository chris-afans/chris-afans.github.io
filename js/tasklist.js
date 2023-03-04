var listarr = [localStorage.getItem("task")];


function addTask() {
  listarr.push(document.getElementById("taskinput").value);
}

function myFunction() {
  addTask();
  var result = listarr.join("\r\n");
  localStorage.setItem("task", result);
  document.getElementById("textarea").innerHTML = localStorage.getItem("task");
  document.getElementById("taskinput").value ="";
 }

function clearTasks() {
  localStorage.clear();
}