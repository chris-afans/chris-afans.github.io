"use strict"
/**
 * Global Variables.
 */
window.onload = initialize;
let animationId = null;
let timer = 250;
let position = 0;
let myArray = new Array();
let index = 0;
let isRunning = false;
ANIMATIONS["custom"] = " \\o/\n" +
"  #\n" +
"_/ \\_\n" + 
"=====\n" +
"  o\n" +
    " /#\\\n" +
    " _|_\n";

/**
 * This function calls all the eventlistener functions when the page loads.
 */
function initialize(){
    addStartButtonEventLister();
    addStopButtonEventListener();
    addAnimationTypeEventListener();
    addSizeEventListener();
    addSpeedEventListener();
}
/**
 * This function is an eventlistener for the start button.
 * This function calls the startAnimation function when the startButton is clicked
 */
function addStartButtonEventLister(){
    document.querySelector("#start").addEventListener('click', startAnimation);
}

/**
 * This function starts the animation by calling the runAnimation function.
 */
function startAnimation(){
    document.querySelector("#start").disabled = true;
    document.querySelector("#optionselect").disabled = true;
    console.log(timer);
    runAnimation();
    isRunning = true;
}

/**
 * This function is responsible for the actual start of the animation on the page.
 */
function runAnimation() {
    animationId = setInterval(function(){
        position++;
        frames();
        
        let lastIndex = index + 1;
        if(myArray[lastIndex] != null){
         index++;
        }
        if(myArray[lastIndex] == null){
         index = 0;
        }
     }, timer);
     console.log(animationId);
}

/**
 * This function is used by the runAnimation function to show each frame.
 */
function frames() {
    document.querySelector("#text").innerHTML = myArray[index]; 
}

/**
 * This function is an eventlistener for the stop button.
 * This function calls the stopAnimation function when the stopButton is clicked
 */
function addStopButtonEventListener(){
    document.querySelector("#stop").addEventListener('click', stopAnimation);
}

/**
 * This function stops the animation that is currently running.
 */
function stopAnimation(){
    clearInterval(animationId);
    isRunning = false;
    document.querySelector("#text").innerHTML = myArray.join("=====\n");
    document.querySelector("#start").disabled = false;
    document.querySelector("#optionselect").disabled = false;
}

/**
 * This function is an eventlistener for animation type.
 * It displays the animations that the user chooses by calling the displayAnimation function.
 */
function addAnimationTypeEventListener(){
    document.querySelector("#optionselect").addEventListener('change', displayAnimation);
}

/**
 * This function displays the animation the user chooses in the textbox.
 */
function displayAnimation(event) {
    document.querySelector("#text").innerHTML = ANIMATIONS[event.target.value];
    myArray = ANIMATIONS[event.target.value].split("=====\n");
}

/**
 * This function is an eventlistener for the sizes of the text in the textbox.
 * This function calls the changeSize function depending on what size the user chooses.
 */
function addSizeEventListener(){
    document.querySelector("#size").addEventListener('change', changeSize);
}

/**
 * This function changes the size of text in the textbox depending on what size the user chooses.
 */
function changeSize(event) {
    document.querySelector("#text").style.fontSize = event.target.value;
}

/**
 * This function is an eventlistener for the turbo checkbox.
 * This function calls the checkTurbo function when the turbo checkbox is clicked/unclicked
 */
function addSpeedEventListener(){
    document.querySelector("#turbo").addEventListener('change', checkTurbo);
}

/**
 * This function checks whether the turbo checkbox has been checked/unchecked.
 * This function changes the speed of the animation accordingly.
 */
function checkTurbo() {
    if(document.querySelector("#turbo").checked == true){
        
        timer = 50;
        if(isRunning){
            clearInterval(animationId);            
            runAnimation();
        }
    }else{
        
        timer = 250;
        if(isRunning){
            clearInterval(animationId);
            
            runAnimation();
        }
    }
}