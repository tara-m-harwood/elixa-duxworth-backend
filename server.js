const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(9000, function() {
    console.log('listening on 9000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

MongoClient.connect('mongodb-connection-string', (err, client) => {
  // ... do something here
})

console.log("Hello Node World")