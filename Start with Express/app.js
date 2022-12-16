const http = require('http')

const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('In Middleware')
  next()
})

app.use((req, res, next) => {
  console.log('In another Middleware')
  //   res.send('<h1>Hello Express</h1>')
  res.send({ key1: 'value' })
})

app.listen(3000)
