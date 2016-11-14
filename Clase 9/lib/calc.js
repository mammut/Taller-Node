function add(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw new Error('All arguments must be numbers');
    }
    return a + b;
}

function sub(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw new Error('All arguments must be numbers');
    }
    return a - b;
}

function div(a, b) {
    if (b == 0)
        throw new Error('Divison by zero');
    return a / b;
}

module.exports = {
    add,
    sub,
    div
};
