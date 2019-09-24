var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(3001)