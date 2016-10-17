var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var R = require('ramda');
var User = require('./models/User.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Buscar 1
 */
app.get('/users/:id', (req, res) => {
    var user = R.find(R.propEq('id', Number(req.params.id)), users);
    res.json(user);
    res.end();
});

/**
 * Buscar todos
 */
app.get('/users', (req, res) => {
    res.json(users);
    res.end();
});

/**
 * Crear nuevo y retornarlo
 */
app.post('/users', (req, res) => {
    var usuario_nuevo = {
        name: req.body.username,
        email: req.body.email
    };
    User.create(usuario_nuevo)
    .then( (new_user) => {
        res.json(new_user);
    })
    .catch( (err) => {
        res.json(err);
    });
});

/**
 * Borrar uno
 */
app.delete('/users/:id', (req, res) => {
    var id_a_borrar = req.params.id;
    //... borar el usuario y retornarlo.
});

/**
 * Actualizar uno y retornarlo
 */
app.put('/users/:id', (req, res) => {
    var id_a_actualizar = req.params.id;
    // CUIDADO con los campos que se actualizan,
    // si no se manda el email, que no se actualice...
    //... actualizar el usuario y retornarlo.
});


User.sync({force: true}).then(function () {
    app.listen(1313, () => {
        console.log('Servidor arriba en el puerto 1313');
    });
});
