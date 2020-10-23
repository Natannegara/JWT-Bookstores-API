const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authentication = require('../../middleWare/authentication')

app.use(authentication)
app.patch('/transactions', (req, res) => {
    const id = req.query.id
    const body = req.body
    res.send(db.edit('transactions', id, body))

})

module.exports = app