const e = require('express')
const hyperid = require('hyperid')

function accessLogin(req, res, next) {
    const authorization = req.headers.authorization
    if (authorization) {
        const splt = authorization.split(' ')[1]
        const valid = hyperid.decode(splt)
        if (valid) {
            next()
        } else {
            res.status(401).send('unauthorized')
        }
    } else {
        res.status(404).send('please input your token')
    }

}

module.exports = accessLogin