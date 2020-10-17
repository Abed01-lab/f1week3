//a
function test(arrays) {
    var arrayOut = arrays.map(function (element) {
        return '<li>' + element + '</li>';
    });

    arrayOut.unshift('<ul>');
    arrayOut.push('</ul>');
    return arrayOut.join('');
};

function add(name, array, callback){
    array.push(name);
    div.innerHTML = callback(array);
}


//b
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var div = document.getElementById("d1");
div.innerHTML = test(names);

var button = document.getElementById("b1");
button.addEventListener("click", function (e) {
    var name = document.getElementById("i1").value;
    console.log(name);
    add(name, names, test);
    e.preventDefault();
}, false);

//c
document.getElementById("b2").addEventListener("click", function(e) {
    subLast(names, test);
    e.preventDefault();
});

document.getElementById("b3").addEventListener("click", function(e) {
    subFirst(names, test);
    e.preventDefault();
});

function subLast(array, callback){
    array.pop();
    div.innerHTML = callback(array);
}

function subFirst(array, callback){
    array.shift();
    div.innerHTML = callback(array);
}
