const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.patch('/bookPublishers', (req, res) => {
    const id = req.query.id
    const body = req.body
    res.send(db.edit('bookPublishers', id, body))

})

module.exports = app