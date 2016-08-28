function saludarAAlguien(nombre) {
  console.log(nombre);
}

var saludarAAlguien = console.log;
// saludarAAlguien("Jon Snow");

var a = [1,2,3,4,5];
var b = ['asdf', 'b', 123123];

a.push(3);
a = a.concat([3]);

// Objeto literal
var jon = {
  nombre: 'Jon Snow',
  edad: 20,
  armas: ['espada', 'daga'],
  padre: {
    nombre: "Ed start?",
    edad: 50
  },
  saludar: function() {
    console.log(this.nombre);
  }
}

// Objeto Constructor
function Persona(name){
  // constructor
  this.name = name;
}

Persona.prototype.saludar = function () {
  console.log(this.name);
}

var arya = new Persona("Arya");

arya.saludar();
jon.saludar();
