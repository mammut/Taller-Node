const request = require('request');
const API_URL = 'http://jsonplaceholder.typicode.com';
const Promise = require('bluebird');

// var myRequest = Promise.promisify(request); // Forma correcta de convertir una funcion con callback en promesas
function myRequest(url) {
    return new Promise(function(resolve, reject) {
        request(url, function(err, response, body) {
            if (err) {
                return reject(err);
            }
            resolve(JSON.parse(body));
        });
    });
}

myRequest(API_URL + '/users')
    .then(function(u) {
        return myRequest(API_URL + '/albums')
    })
    .then(function(albums) {
        return myRequest(API_URL + 'asdf/photos');
    })
    .then(function(photos){
    })
    .catch(function(err) {
        console.error("Hubo un error", err);
    })

// var promesa1 = myRequest(API_URL + '/users');
// var promesa2 = myRequest(API_URL + '/albums');
// var promesa3 = myRequest(API_URL + '/photos');
// Promise.all([promesa1, promesa2, promesa3])
//     .then(function(x) {
//         // x = [response1, response2, response3]
//         console.log(x);
//     });
