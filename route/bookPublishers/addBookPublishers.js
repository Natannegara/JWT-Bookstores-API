const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.post('/bookPublishers', (req, res) => {
    const body = req.body
    const result = db.add('bookPublishers', body)
    res.send(result)
    return
})


module.exports = app