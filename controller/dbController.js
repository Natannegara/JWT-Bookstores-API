const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const booksModel = require('../model/books')
const bookPublishersModel = require('../model/bookPublishers')
const booksStoresModel = require('../model/bookStores')
const transactionModel = require('../model/transactions')
const usersModel = require('../model/user')

let db;
(async () => {
    try {
        const fs = require('fs')
        const util = require('util')
        const readdir = util.promisify(fs.readdir)
        const path = require('path').resolve()
        const dir = await readdir(path)
        if (!dir.includes('db.json'))
            fs.writeFile(path + 'db.json', '', () => 1)

        const adapter = new FileSync('db.json')
        db = low(adapter)
        // we will call each key in lowdb object as "table"
        db.defaults({
            books: [],
            bookStores: [],
            bookPublishers: [],
            transactions: [],
            users: []
        })
            .write()
    } catch (error) {
        console.log(error);
    }
})()


function validator(body, model) {
    let result = {}
    let modelCounter = model.length
    let counter = 0
    for (const key in body) {
        if (model.includes(key)) {
            result[key] = body[key]
            counter++
        }
    }
    if (counter < modelCounter) {
        return false
    }
    return result
}


/**
 * Get data
 * @param {String} tableName table name
 * @returns {Object} data
 */
function get(tableName, query) {
    if (query) {
        return db
            .get(tableName)
            .find(query)
            .value()
    } else {
        return db
            .get(tableName)
            .value()
    }
}

/**
 * Add data
 * @param {String} tableName table name
 * @param {Object} body inserted data
 */
function add(tableName, body) {
    let parsedBody
    if (tableName == 'books') {
        parsedBody = validator(body, booksModel)
    }
    if (tableName == 'bookStores') {
        parsedBody = validator(body, booksStoresModel)
    }
    if (tableName == 'bookPublishers') {
        parsedBody = validator(body, bookPublishersModel)
    }
    if (tableName == 'transactions') {
        parsedBody = validator(body, transactionModel)
    }
    if (tableName == 'users') {
        parsedBody = validator(body, usersModel)
    }
    if (!parsedBody) {
        return false
    }
    db.get(tableName)
        .push(parsedBody)
        .write()
}

/**
 * Add a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 * @param {Object} body updated data
 */
function edit(tableName, id, body) {
    const parsedId = parseInt(id)
    let parsedBody
    if (tableName == 'books') {
        parsedBody = validator(body, booksModel)
    }
    if (tableName == 'bookStores') {
        parsedBody = validator(body, booksStoresModel)
    }
    if (tableName == 'bookPublishers') {
        parsedBody = validator(body, bookPublishersModel)
    }
    if (tableName == 'transactions') {
        parsedBody = validator(body, transactionModel)
    }
    if (!parsedBody) {
        return false
    }
    db.get(tableName)
        .find({ id: parsedId })
        .assign(parsedBody)
        .write()
}

/**
 * Remove a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 */
function remove(tableName, id) {
    const parsedId = parseInt(id)
    db.get(tableName)
        .remove({ id: parsedId })
        .write()
}

module.exports = {
    get,
    add,
    edit,
    remove
}