//CRUD

const port = 3000
const express = require('express')
const dataBase = require('./dataBase')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produts', (req, res, next) => {
    res.send(dataBase.getProduts())
})

app.get('/produts/:id', (req, res, next) => {
    res.send(dataBase.getProdut(req.params.id))
})

app.post('/produts', (req, res, next) => {
    const produt =  dataBase.saveProdut({
        name: req.body.name,
        price: req.body.price
    })
    res.send(produt)
})

app.put('/produts/:id', (req, res, next) => {
    const produt =  dataBase.saveProdut({
        id: req.params.id.replace,
        name: req.body.name,
        price: req.body.price
    })
    res.send(produt)
})

app.delete('/produts/:id', (req, res, next) => {
    const produt =  dataBase.deleteProdut(req.params.id)
    res.send(produt)
})

app.listen(port, () => {
    console.log(`Server running in port ${port}.`)
})