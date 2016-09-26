const request = require('request');
const R = require('ramda');
const API_URL = 'http://jsonplaceholder.typicode.com';

var user_name = process.argv[2];

console.log(`Bajando datos de ${user_name}`);

request(API_URL + '/users', function (err, response, body) {
    let users = JSON.parse(body);
    let user = R.find(R.propEq('name', user_name), users);
    request(API_URL + '/albums', function(err, response, body) {
        // if (response.status != 200) return;
        let albums = JSON.parse(body);
        albums_of_user = R.filter(x => x.userId == user.id, albums);

        request(API_URL + '/photos', function(err, response, body) {
            let photos = JSON.parse(body);
            let albums_with_pictures = albums_of_user.map(function(a) {
                return {
                    userId: a.userId,
                    id: a.id,
                    title: a.title,
                    photos: photos.filter(x => x.albumId == a.id)
                }
            });
            console.log({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                albums: albums_with_pictures
            });
        });
    });
});
