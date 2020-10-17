
//JavaScript Function Callbacks
//1
function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
}

var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

//2
console.log(add(1, 2));
console.log(add);
console.log(add(1, 2, 3));
console.log(add(1));
console.log(cb(3, 3, add));
console.log(cb(4, 3, sub));

//3
try {
    console.log(cb(3, 3, add()));
} catch (e) {
    console.error(e.name + ' something wrong with line 29 ' + e.message)
}

//4
console.log(cb(3, "hh", add));

var mule = function (n1, n2) {
    return n1 * n2;
}

console.log(cb(2, 2, mule));

//5
var divide = function (n1, n2) {
    return n1 / n2;
}
console.log(cb(2, 2, divide));

//Callbacks With Filter and Foreach

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//1
var result = names.filter(word => word.length <= 3);

console.log(result);

//2
var namesV2 = names.map(name => name.toUpperCase());

console.log(namesV2);

names.forEach(function (name) {
    console.log(name);
});

//3
function test(arrays) {
    var arrayOut = arrays.map(function (element) {
        return '<li>' + element + '</li>';
    });

    arrayOut.unshift('<ul>');
    arrayOut.push('</ul>');
    return arrayOut.join('');
};

console.log(test(names));

// 4
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

//a
function carsNewerThanYear(year) {
    var newArray = cars.filter(car => car.year > year);
    return newArray;
}

console.log(carsNewerThanYear(1999));

function carsByName(name) {
    var newArray = cars.filter(car => car.make === name);
    return newArray;
}

console.log(carsByName("Volvo"));

function carsByPrice(price) {
    var newArray = cars.filter(car => car.price < price);
    return newArray;
}

console.log(carsByPrice(5000));

//4a
function sqlInsert(array) {
    var variableArray = Object.keys(array[0]);
    var arrayOut = [];
    for (var i = 0; i < array.length; i++) {
        arrayOut.push("INSERT INTO cars ( " + variableArray.join() + ") VALUES ( " + Object.values(array[i]) + ");");
    }
    return arrayOut;
}
console.log(sqlInsert(cars));

//Asynchronous Callbacks


//1
function Person(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + self.name);
        console.log(typeof self);
    }, 2000);
}
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: " + name);  //Explain this

//2
var p = new Person("Kurt Wonnegut");
console.log("I'm global: " + name);

//3
var greeter = function () {
    console.log(this.message);
};

var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);