const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/transactions', (req, res) => {
    const parseId = parseInt(req.body.id)
    res.send(db.get('transactions', parseId))
})

module.exports = app