const Sequelize = require('sequelize');

var sequelize = new Sequelize('proyecto', null, null, {
  dialect: 'sqlite',
  storage: 'dev.database.sqlite'
});

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
};
