"use strict";
var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var sequelize = new Sequelize(null, null, null, {
    dialect: 'sqlite',
    storage: 'dev.database.sqlite'
});
var db = {};

fs
.readdirSync(__dirname + '/../models')
.filter(function(file) {
    return (file.indexOf(".") !== 0);
})
.forEach(function(file) {
  var model = sequelize['import'](path.join(__dirname + '/../models/', file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
