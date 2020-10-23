require('dotenv').config()

const express = require('express')
const app = express.Router()
const db = require('./controller/dbController')
const jwt = require('jsonwebtoken')

app.post('/login', (req, res) => {
    const user = db.get('users', req.body)
    const name = req.body.username
    const loginName = { username: name }

    if (user) {
        const accessToken = jwt.sign(loginName, process.env.ACCESS_TOKEN_SECRET)
        user.token = accessToken
        res.send(user)
    } else {
        res.status(401).send('unauthorized')
    }
})

module.exports = app