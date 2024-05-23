const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.connect(
  'mongodb+srv://singhjasdeep1602:iamironman%40143RDJ@cluster0.ausbbux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
);

const BookScheme = new mongoose.Schema({
  title: String,
  author: String,
});

const BookModel = mongoose.model('books', BookScheme);

app.get('/books', async (req, res) => {
  try {
    const getBooks = await BookModel.find();
    res.json(getBooks);
  } catch (error) {
    res.status(500).json('books not found');
  }
});

app.post('/books', async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new BookModel({ title, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: ' not added' });
  }
});

app.put('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;
    const updatedBook = await BookModel.findByIdAndUpdate(id, {
      title,
      author,
    });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: ' not added' });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await BookModel.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: ' not added' });
  }
});

app.listen(3000, () => {
  console.log('connected');
});
