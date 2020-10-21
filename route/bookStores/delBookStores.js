const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/bookStores', (req, res) => {
    const id = req.query.id
    res.send(db.remove('bookStores', id))
})

module.exports = app