const request = require('request');

const API = "https://jsonplaceholder.typicode.com/comments";

request(API, (err, response, body) => {
    if (err) return console.log(err);
    var data = JSON.parse(body);
    var bodies_lengths = data.map(d => d.body.length);
    console.log(promedio(bodies_lengths));
});

function promedio(data) {
    return data.reduce((prev, next) => prev + next, 0) / data.length;
}
