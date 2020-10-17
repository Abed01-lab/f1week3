
//Simple DOM manipulationn and Event handling   

//a
const divs = document.getElementsByTagName("div");

for (let index = 0; index < divs.length; index++) {
    const element = divs[index];
    element.style.backgroundColor = "red";
}

//b
var button = document.getElementById("b1");
button.onclick = clickMe;

function clickMe () {
    for (let index = 0; index < divs.length; index++) {
        const element = divs[index];
        element.style.backgroundColor = "green";
    }
}

