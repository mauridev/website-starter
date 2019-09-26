var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

var User = require('./models/User')

var posts = [
    { message: 'hola'},
    { message: 'hi'},
    { message: 'opa'}
]

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', (req, res) => {
    res.send(posts)
})


app.post('/register', (req, res) => {
    var userData = req.body

    var user = new User(userData)    
    user.save((err, result) => {
        if (err)
            console.log('There is an error saving the user')
           
        res.sendStatus(200)    
    })
    
})


mongoose.connect('mongodb+srv://mauridev:ElectromecanicA21@maurimongo-pbqll.mongodb.net/pssocial?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(!err)
        console.log('Connected')
})

app.listen(3001)