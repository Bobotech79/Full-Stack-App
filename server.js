const express = require('express');
const app = express();

const mongoose = require('mongoose');
const authRoute = require('./routes/autRoute');
const authUser = require('./model/User');

//let mongoDBConfig = mongodb + srv://dbSys:<TestMongo2026##>@cluster0.x8yrcug.mongodb.net/?appName=Cluster0;

const connectDB = async () => {
  try {
    await mongoose.connectDB('mongodb+srv://dbSys:<TestMongo2026##>@cluster0.x8yrcug.mongodb.net/?appName=Cluster0');
    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};


app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is my API');
});

app.get('/api', (req, res) => {
  res.send('Hello from the API');
});

app.post('/api', (req, res) => {
  res.send('Post request to the API');
});

app.put('/api', (req, res) => {
  res.send('Put request to the API');
});

app.delete('/api', (req, res) => {
  res.send('Delete request to the API');
});

app.listen(3000, () => { console.log('Server is running on port 3000'); });


module.exports = connectDB;