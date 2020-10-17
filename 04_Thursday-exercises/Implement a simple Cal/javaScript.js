function displayer (n) {
    let display = document.getElementById("display");
    display.innerHTML += n;
}

document.getElementById("buttons").addEventListener("click", function (event) {
    event.stopPropagation();
    const n = event.target.innerHTML;
    if(n.length < 2){
        if (n != "="){
            displayer(n);
            console.log(n);
        }
    }
    event.preventDefault();
}, false);

document.getElementById("calculate").addEventListener("click", function (event) {
    const display = document.getElementById("display").innerHTML;
    if (display.includes("*")){
        const list = display.split("*");
        const sum = mul(parseInt(list[0]), parseInt(list[1]));
        document.getElementById("display").innerHTML = sum;
    } 
    else if (display.includes("/")){
        const list = display.split("/");
        const sum = div(parseInt(list[0]), parseInt(list[1]));
        document.getElementById("display").innerHTML = sum;
    }
    else if (display.includes("+")){
        const list = display.split("+");
        const sum = add(parseInt(list[0]), parseInt(list[1]));
        document.getElementById("display").innerHTML = sum;
    }
    else if (display.includes("-")){
        const list = display.split("-");
        const sum = sub(parseInt(list[0]), parseInt(list[1]));
        document.getElementById("display").innerHTML = sum;
    }
}, false);

function add(n1, n2){
    return n1 + n2;
}
function sub(n1, n2){
    return n1 - n2;
}
function div(n1, n2){
    return n1 / n2;
}
function mul(n1, n2){
    return n1 * n2;
}