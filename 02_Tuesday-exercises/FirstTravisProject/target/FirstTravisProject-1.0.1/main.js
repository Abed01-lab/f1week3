/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getAllMoviesTable(data) {
    const str = '<table><tr><th>Id</th><th>Title</th><th>Actors</th><th>Year</th></tr>';
    let table = data.map(movie => {
       return '<tr><td>' + movie.id + '</td><td>' + movie.title + '</td><td>'
        + movie.actors.join(', ') + '</td><td>' + movie.year + '</td></tr>';
    });
    table.unshift(str);
    table.push('</table>');
    console.log(table.join(''));
    document.getElementById('displayAll').innerHTML = table.join('');
}

function getSingleMovie (data) {
    let table = '<table><tr><td>Id:</td><td>' + data.id + '</td></tr>' +
                '<tr><td>Title:</td><td>' + data.title + '</td></tr>'+
                '<tr><td>Actors:</td><td>' + data.actors.join(', ') + '</td></tr>' +
                '<tr><td>Year</td><td>' + data.year + '</td></tr>' +
                '</table>';
        
    document.getElementById('displayOne').innerHTML = table;
    
}

document.getElementById('b2').addEventListener('click', function (event) {
    fetch('http://localhost:8080/jpareststarter/api/movie/' + document.getElementById('i1').value)
            .then(res => res.json())
            .then(data => {getSingleMovie(data)});
}, false)

document.getElementById('b1').addEventListener('click', function (event) {
    fetch('http://localhost:8080/jpareststarter/api/movie/all')
            .then(res => res.json())
            .then(data => {getAllMoviesTable(data)});
}, false);

