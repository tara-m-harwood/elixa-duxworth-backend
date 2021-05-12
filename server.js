const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;



connectionString="mongodb+srv://elixa:LF26!.AaqDDCHh!@cluster0.24bp7.mongodb.net/elixa-db?retryWrites=true&w=majority"

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('elixa-db')

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

})

.catch(console.error)
console.log("Hello Node World")