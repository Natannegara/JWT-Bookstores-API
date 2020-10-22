const express = require('express')
const app = express.Router()
const db = require('./controller/dbController')

app.post('/register', (req, res) => {
    res.send(db.add('users', req.body))
})

module.exports = app