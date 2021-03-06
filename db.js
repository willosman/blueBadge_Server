const Sequelize = require('sequelize');
// const sequelize = new Sequelize('blue-badge-project', 'postgres', 'password', {
//     host: 'localhost',
//     dialect: 'postgres'
// });
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // very important
    },
  },
});

sequelize.authenticate().then(
  function () {
    console.log('Connected to blue-badge-project postgres database');
  },
  function (err) {
    console.log(err);
  }
);

module.exports = sequelize;
