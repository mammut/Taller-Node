var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var R = require('ramda');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var current_id = 1;
var users = [{ id: 1, username: 'jon snow', email: 'jsnow@thewall.ws' }];

app.get('/users/:id', (req, res) => {
    var user = R.find(R.propEq('id', Number(req.params.id)), users);
    res.json(user);
    res.end();
});

app.get('/users', (req, res) => {
    res.json(users);
    res.end();
});

app.post('/users', (req, res) => {
    var usuario_nuevo = {
        id: current_id++,
        username: req.body.username,
        email: req.body.email
    };
    users.push(usuario_nuevo);
    res.json(usuario_nuevo);
});

app.delete('/users/:id', (req, res) => {
    var id_a_borrar = req.params.id;
    //... borar el usuario y retornarlo.
});

app.put('/users/:id', (req, res) => {
    var id_a_actualizar = req.params.id;
    // CUIDADO con los campos que se actualizan,
    // si no se manda el email, que no se actualice...
    //... actualizar el usuario y retornarlo.
});



app.listen(1313, () => {
    console.log('Servidor arriba en el puerto 1313');
});
