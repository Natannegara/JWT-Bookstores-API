const hyperid = require('hyperid')
const jwt = require('jsonwebtoken')

function authentication(req, res, next) {
    const authorization = req.headers.authorization
    if (authorization) {
        const splt = authorization && authorization.split(' ')[1]
        if (!splt) {
            return res.status(401)
        } else {
            jwt.verify(splt, process.env.ACCESS_TOKEN_SECRET)
            next()
        }
    } else {
        res.status(404).send('please input your token')
    }

}

module.exports = authentication