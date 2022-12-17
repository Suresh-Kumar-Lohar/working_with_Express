const express = require('express')
const fs = require('fs')

const app = express()

const loginRoutes = require('./routes/login')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/login', loginRoutes)

app.post('/save', (req, res, save) => {
  console.log('first')
  let userName = req.body.username
  let message = req.body.msg
  let data = req.body.username + ' : ' + req.body.msg + ', '
  console.log(data)
  fs.appendFile('message.txt', data, (err) => {
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  })
})

let allMsg
app.use('/', (req, res, next) => {
  allMsg = fs.readFileSync('message.txt', { encoding: 'utf-8' })
  if (!allMsg) {
    allMsg = 'Your Messages'
  }
  res.send(
    `
<h1>Chat App</h1>
<p>${allMsg}</p>
<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/save" method="POST">
<label>Type Message</label>
<input type="text" name="msg">
<input type="hidden" name="username" id="username">
<button type="submit">Send</button>
</form>
`
  )
})

app.listen(3000)
