const express = require('express')
const bodyParser = require('body-parser')

const getBooks = require('./route/books/getBooks')
const addBooks = require('./route/books/addBooks')
const editBooks = require('./route/books/editBooks')
const delBooks = require('./route/books/delBooks')

const getBookStores = require('./route/bookStores/getBookStores')
const addBookStores = require('./route/bookStores/addBookStores')
const editBookStores = require('./route/bookStores/editBookStores')
const delBookStores = require('./route/bookStores/delBookStores')

const getBookPublishers = require('./route/bookPublishers/getBookPublishers')
const addBookPublishers = require('./route/bookPublishers/addBookPublishers')
const editBookPublishers = require('./route/bookPublishers/editBookPublishers')
const delBookPublishers = require('./route/bookPublishers/delBookPublishers')

const getTransactions = require('./route/transactions/getTransactions')
const addTransactions = require('./route/transactions/addTransactions')
const editTransactions = require('./route/transactions/editTransactions')
const delTransactions = require('./route/transactions/delTransactions')

const register = require('./register')
const login = require('./login')

const app = express()
app.use(bodyParser.json())

app.use(getBooks)
app.use(addBooks)
app.use(editBooks)
app.use(delBooks)

app.use(getBookStores)
app.use(addBookStores)
app.use(editBookStores)
app.use(delBookStores)

app.use(getBookPublishers)
app.use(addBookPublishers)
app.use(editBookPublishers)
app.use(delBookPublishers)

app.use(register)
app.use(login)

app.use(getTransactions)
app.use(addTransactions)
app.use(editTransactions)
app.use(delTransactions)


const port = 3000
app.listen(port, () => {
    console.log(`${port}`);
})