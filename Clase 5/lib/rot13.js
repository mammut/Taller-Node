var count = 0;

module.exports.rot13 = function(str) {
    count++;
    console.log(count);
    return str.toUpperCase();
}

module.exports.cesar = function(str) {
    count++;
    return str.toLowerCase();
}

