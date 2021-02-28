require("dotenv").config()
let express = require('express');
let app = express();
const sequelize = require('./db');

let plants = require('./controllers/plantcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();

app.use(require('./middleware/headers'));

app.use(express.json())

app.use('/user', user);
app.use('/plants', plants);

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)   