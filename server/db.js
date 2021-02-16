const Sequelize = require('sequelize');
const sequelize = new Sequelize('blue-badge-project', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to blue-badge-project postgres database')
    },
    function(err){
        console.log(err)
    }
);

module.exports = sequelize;