const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use('/birds', require('./routes/birds'))
// app.use('/dogs', require('./routes/dogs'))
// app.use('/ducks', require('./routes/ducks'))
// app.use('/farm', require('./routes/farm'))

module.exports = app

if (!module.parent) {
  app.listen(3000)
}
