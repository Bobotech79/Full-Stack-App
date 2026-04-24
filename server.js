const express = require('express');
const app = express();

const mongoose = require('mongoose');
const authRoute = require('./routes/autRoute');
const cors = require('cors');

//let mongoDBConfig = mongodb + srv://dbSys:<BobobTech1979>@cluster0.x8yrcug.mongodb.net/?appName=Cluster0;

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dbSys:BobobTech1979@cluster0.x8yrcug.mongodb.net/?appName=Cluster0');
    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};
connectDB();

app.use(cors({ origin: true, }));
app.use(express.json());

app.use('/auth', authRoute);
app.get('/', (req, res) => {
  res.send('This is my API');
});

app.listen(3000, () => { console.log('Server is running on port 3000'); });

module.exports = connectDB;