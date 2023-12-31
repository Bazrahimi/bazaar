require('dotenv').config();

const mongoose = require('mongoose');
// for some reason process.env.is undefined resuls undefined
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
