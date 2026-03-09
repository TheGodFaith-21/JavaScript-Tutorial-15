console.log("JavaScript Tutorial 15");

console.log('');
console.log("DOM EVENT LISTENER");
console.log('');

console.log("ONLOAD EVENT LISTENER");
console.log('');
/*
function funcName(){
    alert("Page Loaded");
    let title = document.querySelector(".title");
    title.innerHTML="Hello World";
}
*/
console.log('');
console.log("ONCLICK EVENT LISTENER");
console.log('');
/*
function submit(){
    let title = document.querySelector(".title");
    title.innerHTML="JavaScript Tutorial 15";  
    alert("H1 Change");
}
*/
console.log('');
console.log("ONMOUSEOVER and ONMOUSEOUT EVENT LISTENER");
console.log('');
/*
function mHov(){
    let title = document.querySelector(".title");
    title.innerHTML="You Hover the text";
    //alert("Hover This");
}
function umHov(){
    let title = document.querySelector(".title");
    title.innerHTML="You Hover This";
    //alert("Hover This");
}
*/
console.log('');
console.log("ONFOCUS EVENT LISTENER");
console.log('');
/*
function fInput(){
    let inp = document.querySelector("input"); 
    inp.style.background = "blue";
    inp.style.color = "white";
}
*/
console.log('');
console.log("ONBLUR EVENT LISTENER");
console.log('');
/*
function bInput(){
    let inp = document.querySelector("input"); 
    inp.style.background = "green";
    inp.style.color = "yellow";
}
*/
console.log('');
console.log("ONINPUT EVENT LISTENER");
console.log('');

function oInput(){
    let inp = document.querySelector("input"); 
    let p = document.querySelector("p");
    p.innerHTML = inp.value;
}