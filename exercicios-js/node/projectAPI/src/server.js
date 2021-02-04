const port = 3003

const express = require('express')
const app = express()
const database = require('./database')

app.get('/products', (req, res, next) => {
    console.log('Middleware 1....')
    next()
})

app.get('/products', (req, res, next) => {
    res.send(database.getProduct())

})

app.get('/ products /:id:name', (req, res, next) => {
    res.send(database.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price

    })
    res.send(product)

})

app.listen(port, () => {

})

// convert json
app.listen(port, () => {
    console.log(`Server execute  in port ${port}.`)

})