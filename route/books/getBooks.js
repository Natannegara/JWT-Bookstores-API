const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/books', (req, res) => {
    const parseId = parseInt(req.body.id)
    res.send(db.get('books', parseId))
})

module.exports = app