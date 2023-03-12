
$(document).ready(function(){
    initialize();



    // $(".boundary").mouseout(function(){
    //    $(".boundary").each(function() {
    //     $(this).css({
    //         "background-color" :"#eeeeee",
    //         "cursor" : "pointer"
    //     })
    //    }

    // });
});

let lost = false;
let start = false;
let win = false;
function initialize() {
    addyouLoseEventListener();
    addyouWinEventListener();
    addRestartMazeEventListener();
    addDisallowCheatingEventListener();
}
function addyouLoseEventListener(){
    let elements = document.getElementsByClassName("boundary");
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", youLose)
      }
    //document.querySelector("div.boundary").addEventListener('hover', youLose);
}

function addyouWinEventListener() {
    document.querySelector("#end").addEventListener("mouseover", youWin);
}

function addRestartMazeEventListener() {
    document.querySelector("#start").addEventListener("click", restartMaze);
}

function addDisallowCheatingEventListener() {
    // var elements = document.querySelectorAll("p, h1, h2");
    // console.log(elements);
    // for (var i = 0; i < elements.length; i++) {

    //     elements[i].addEventListener('mouseover', disallowCheating)


    //
   document.querySelector("#maze").addEventListener("mouseleave", disallowCheating);

}

function disallowCheating() {
    if(start == true){
        youLose();
    }
}

function youLose() {
      lost = true;
      if(win == false && start == true){
      $("div.boundary").css({
             "background-color" :"red",
             "cursor" : "pointer"
         });

        $("#status").html("You Lose!");

        }
}

function youWin() {
    win = true;
    if(lost == false){
        $("#status").html("You Win!");
    }
}

function restartMaze() {
    if($(".boundary").each(function(){
        $(this).css({
            "background-color" : "red"
        });
    })){
        $(".boundary").each(function() {
            $(this).css({
                "background-color" :"#eeeeee"
            });
           });
           $("#status").html("Click the &quot;S&quot; to begin.");
           lost = false;
           win = false;
           start = true;
    }
}