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

    app.use(bodyParser.urlencoded({ extended: true }))

    app.listen(9000, function() {
        console.log('listening on 9000')
    })

    app.get('/', (request, result) => {
        result.sendFile(__dirname + '/index.html')
    })

    app.post("/usersCollection", (request, response) => {
        usersCollection.insert(request.body, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result.result);
        });
    }); 

})

.catch(console.error)
console.log("Hello Node World")