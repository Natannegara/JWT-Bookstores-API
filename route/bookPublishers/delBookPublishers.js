const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/bookPublishers', (req, res) => {
    const id = req.query.id
    res.send(db.remove('bookPublishers', id))
})

module.exports = app