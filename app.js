require('dotenv').config()
let express = require('express')
let app = express()
const sequelize = require('./db')

let plants = require('./controllers/plantcontroller')
let user = require('./controllers/usercontroller')

sequelize.sync()
// sequelize.sync({ force: true })

app.use(require('./middleware/headers'))

app.use(express.json())

app.use('/user', user)
app.use('/plants', plants)

app.listen(process.env.PORT, function () {
  console.log(`App is listening on port ${process.env.PORT}`)
})
