const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`user`).value)" action="/login/add-user" method="POST"><label for="user">UserName</label><input type="text" id="user" name="username"><button type="submit">Login</button</form>'
  )
})

router.post('/add-user', (req, res, next) => {
  let username = req.body.username
  console.log(username)
  // localStorage.setItem('username', username)
  res.redirect('/')
})

module.exports = router
