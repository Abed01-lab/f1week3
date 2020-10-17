function createCarTable(data) {
    console.log(data);
    const headers = "<table class=\"table\"><tr><th>Year</th><th>Make</th><th>Model</th><th>Price</th></tr>";

    let mappedRows = data.map(car => "<tr><td>" + car.year + "</td><td>" + car.make + "</td><td>" + car.model + "</td><td>" + car.price + "</td></tr>");
    let joinedRows = mappedRows.join("");
    return headers + joinedRows + "</table>";
}

var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var div = document.getElementById("d1");
div.innerHTML = createCarTable(cars);

function filterByPrice(price){
    div.innerHTML = createCarTable(cars.filter(car => car.price < price));
}

document.getElementById("b1").addEventListener("click", function (event) {
    filterByPrice(document.getElementById("i1").value);
    event.preventDefault();
}, false);