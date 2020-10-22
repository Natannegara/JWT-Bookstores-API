const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const accessData = require('../../middleWare/authentication')

app.use(accessData)
app.patch('/transactions', (req, res) => {
    const id = req.query.id
    const body = req.body
    res.send(db.edit('transactions', id, body))

})

module.exports = app