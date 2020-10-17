document.getElementById('b1').addEventListener('click', function (event){
    fetch('https://jsonplaceholder.typicode.com/users/' + document.getElementById('i1').value)
    .then(res => res.json())
    .then(data => {print(data)});
    event.preventDefault();
}, false);

document.getElementById('b2').addEventListener('click', function (event){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {printTable(data)});
    event.preventDefault();
}, false);

function printTable(data) {
    console.log(data);
    let str = '<table><tr><th>Name</th><th>Phone</th></tr>';
    const table = data.map(data => {
        return '<tr><td>' + data.name + '</td><td>' + data.phone + '</td></tr>';
    });
    console.log(table)
    table.unshift(str);
    table.push('</table>');
    document.getElementById('display').innerHTML = table.join('');
}

function print(data) {
    document.getElementById('name').innerHTML = 'Name: ' + data.name;
    document.getElementById('phone').innerHTML = 'Phone: ' + data.phone;
    document.getElementById('street').innerHTML = 'Street: ' + data.address.street;
    document.getElementById('highlight').innerHTML = '<bold>Address</bold>';
    document.getElementById('city').innerHTML = 'City: ' + data.address.city;
    document.getElementById('zip').innerHTML = 'Zipcode: ' + data.address.zipcode;
    document.getElementById('geo').innerHTML = 'Geo (lat, lng)' + data.address.geo.lat + ',' + data.address.geo.lng;  
}