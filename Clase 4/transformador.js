var fs = require('fs');
var gzip = require('zlib').createGzip();
var stream = require('stream');

var reader = fs.createReadStream('entrada.txt');
var writer = fs.createWriteStream('salida.txt');


var upperCase = new stream.Transform;
upperCase._write = function(data, encoding, done) {
    var tarea = data.toString('utf8').toUpperCase();
    upperCase.push(tarea);
    done();
}

process.stdin.pipe(upperCase).pipe(process.stdout);
