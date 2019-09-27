var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var jwt = require('jwt-simple')
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

app.post('/login', async (req, res) => {
    var userData = req.body

    var user = await User.findOne({ email: userData.email })
    
    if(!user)
        return res.status(401).send({ message: 'Email or Password invalid'})

    if(userData.pwd != user.pwd)
        return res.status(401).send({ message: 'Email or Password invalid'})

    var payload = {}
    var token = jwt.encode(payload, '123')

    console.log(token)
    res.status(200).send({token})
    
})


mongoose.connect('mongodb+srv://mauridev:ElectromecanicA21@maurimongo-pbqll.mongodb.net/pssocial?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(!err)
        console.log('Connected')
})

app.listen(3001)