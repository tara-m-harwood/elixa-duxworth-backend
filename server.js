const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;

connectionString="mongodb+srv://elixa:LF26!.AaqDDCHh!@cluster0.24bp7.mongodb.net/elixa-db?retryWrites=true&w=majority"

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('elixa-db')
    const usersCollection = db.collection('usersCollection')

    app.use(bodyParser.json())

    app.listen(9000, function() {
        console.log('listening on 9000')
    })

    app.get('/usersCollection', (request, response) => {
        usersCollection.find().toArray() 
            .then(results => {
            response.send(results)
        })
    })

    app.post("/usersCollection", (request, response) => {
        console.log(request.body)
        async function postUser(){
            let user = await usersCollection.insertOne(request.body)
            response.json(user)
        }
        postUser()
    }); 

})

console.log("Hello Node World")