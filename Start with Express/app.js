const express = require('express')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)

app.use('/', (req, res, next) => {
  res.send('<h2>Page not Found</h2>')
})

app.listen(3000)
