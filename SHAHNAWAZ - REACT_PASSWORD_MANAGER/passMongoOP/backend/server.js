const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require("dotenv")
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

const app = express();
const port = 3000;

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
client.connect();

// Database Name
const dbName = process.env.DB_NAME;

app.use(bodyparser.json())
app.use(cors())

// Define a route for GET requests to the root URL
app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('myPasswords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});


app.post('/', async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection('myPasswords');
    const findResult = await collection.insertOne(password);
  res.send({success:true , result : findResult});
});


app.delete('/', async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection('myPasswords');
  const findResult = await collection.deleteOne(password)
  res.send({success : true , result : findResult});
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




