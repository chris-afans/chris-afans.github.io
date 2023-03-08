"use strict"
window.onload = initialize;
let animationId = null;
let timer = 250;
let position = 0;
let myArray = new Array();
let index = 0;

function initialize(){
    addStartButtonEventLister();
    addStopButtonEventListener();
    addAnimationTypeEventListener();
    addSizeEventListener();
    addSpeedEventListener();
}

function addStartButtonEventLister(){
    document.querySelector("#start").addEventListener('click', startAnimation);
}

function startAnimation(){
    document.querySelector("#start").disabled = true;
    document.querySelector("#optionselect").disabled = true;
    console.log(timer);
    animationId = setInterval(function(){
       position++;
       frames();
       document.querySelector("#text").style.paddingLeft = position + "px";
       if(myArray[index+1] != null){
        index++;
       }
       if(myArray[index+1] == null){
        index = 0;
       }
    }, timer);
    
}

function frames() {
    document.querySelector("#text").innerHTML = myArray[index]; 
}

function addStopButtonEventListener(){
    document.querySelector("#stop").addEventListener('click', stopAnimation);
}

function stopAnimation(){
    clearInterval(animationId);
    document.querySelector("#text").innerHTML = myArray.join("=====\n");
    document.querySelector("#start").disabled = false;
    document.querySelector("#optionselect").disabled = false;
}

function addAnimationTypeEventListener(){
    document.querySelector("#optionselect").addEventListener('change', displayAnimation);
}

function displayAnimation(event) {
    document.querySelector("#text").innerHTML = ANIMATIONS[event.target.value];
    myArray = ANIMATIONS[event.target.value].split("=====\n");
}

function addSizeEventListener(){
    document.querySelector("#size").addEventListener('change', changeSize);
}

function changeSize(event) {
    document.querySelector("#text").style.fontSize = event.target.value;
}

function addSpeedEventListener(){
    document.querySelector("#turbo").addEventListener('change', checkTurbo);
}

function checkTurbo() {
    if(document.querySelector("#turbo").checked == true){
        timer = 50;
        clearInterval(animationId);
        animationId = setInterval(function(){
            position++;
            frames();
            document.querySelector("#text").style.paddingLeft = position + "px";
            if(myArray[index+1] != null){
             index++;
            }
            if(myArray[index+1] == null){
             index = 0;
            }
         }, timer);
    }else{
        timer = 250;
        clearInterval(animationId);
        animationId = setInterval(function(){
            position++;
            frames();
            document.querySelector("#text").style.paddingLeft = position + "px";
            if(myArray[index+1] != null){
             index++;
            }
            if(myArray[index+1] == null){
             index = 0;
            }
         }, timer);
    }
}