const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/bookPublishers', (req, res) => {
    const parseId = parseInt(req.body.id)
    res.send(db.get('bookPublishers', parseId))
})

module.exports = app