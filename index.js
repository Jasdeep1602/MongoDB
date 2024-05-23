const express = require('express');
const app = express();
const { dbConnection } = require('./db');
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const db = await dbConnection();
    const collection = db.collection('users');

    const findResult = await collection.find().toArray();
    res.json(findResult);
    console.log(findResult);
  } catch (error) {
    console.log(error);
    res.status(500).json('data not found');
  }
});

app.post('/users', async (req, res) => {
  const db = await dbConnection();
  const collection = db.collection('users');
  const result = await collection.insertOne(req.body);
  res.send('created');
});

app.put('/users/:name', async (req, res) => {
  const db = await dbConnection();
  const collection = db.collection('users');
  const singleData = await collection.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send('updated');
});

app.delete('/users/:name', async (req, res) => {
  const db = await dbConnection();
  const collection = db.collection('users');
  const singleData = await collection.deleteOne({ lastName: req.params.name });
  res.send('deleted');
});

app.listen(3000);
