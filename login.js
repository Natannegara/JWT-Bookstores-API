const express = require('express')
const app = express.Router()
const db = require('./controller/dbController')
const hyperId = require('hyperid')

app.post('/login', (req, res) => {
    const instance = hyperId()
    const token = instance()
    const user = db.get('users', req.body)

    if (user) {
        user.token = token
        res.send(user)
    } else {
        res.status(401).send('unauthorized')
    }
})

module.exports = app