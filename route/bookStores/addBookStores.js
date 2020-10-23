const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.post('/bookStores', (req, res) => {
    const body = req.body
    const result = db.add('bookStores', body)
    res.send(result)
    return
})

module.exports = app