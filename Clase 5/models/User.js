const sequelize = require('../lib/db.js').sequelize;
const Sequelize = require('../lib/db.js').Sequelize;

var User = sequelize.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
  email: Sequelize.STRING
});


module.exports = User;
