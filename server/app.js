let express = require('express');
const sequelize = require('./db');
let app = express();

let user = require('./controllers/usercontroller');

sequelize.sync();

app.use('/user', user);

app.listen(3000, function(){
    console.log('App is listening on port 3000')
});