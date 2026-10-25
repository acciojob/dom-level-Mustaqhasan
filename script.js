//your JS code here. If required.
let currentElement=document.getElementById("level");
let level=1;

while(currentElement.parentElement){
    level++;
    currentElement=currentElement.parentElement;
}

alert(`The level of the element is: ${level}`);