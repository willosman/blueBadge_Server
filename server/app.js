require("dotenv").config()
let express = require('express');
const sequelize = require('./db');
let app = express();
let plants = require('./controllers/plantcontroller');

let user = require('./controllers/usercontroller');

sequelize.sync();

// app.use(require("./middleware/headers"))
app.use(express.json())
app.use('/user', user);

app.use('/plants', plants);

app.listen(3000, function(){
    console.log('App is listening on port 3000')
});