const fs = require('fs');

// Leer archivo usuarios.json y mostrar el promedio de latitudes
var data = [];

fs.readFile('usuarios.json', (err, data2) => {
    data = JSON.parse(data2);
    console.log(sacar_promedio(data));
});








function sacar_promedio(usuarios) {
    var latitudes = usuarios.map(function(u) {
        return parseFloat(u.address.geo.lat)
    });

    var suma_latitudes = latitudes.reduce(function (val_ac, val) {return val_ac + val;}, 0);
    return suma_latitudes / latitudes.length;
}
