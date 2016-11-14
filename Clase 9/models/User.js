const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com/users';

function getAll() {
    return axios.get(API);
}

function findOne(userId) {
    return axios.get(API);
}

module.exports = {
    getAll,
    findOne
}
