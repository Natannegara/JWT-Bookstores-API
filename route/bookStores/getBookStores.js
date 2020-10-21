const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/bookStores', (req, res) => {
    const parseId = parseInt(req.body.id)
    res.send(db.get('bookStores', parseId))
})

module.exports = app