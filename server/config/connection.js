require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch((err) => console.log(err));

module.exports = mongoose.connection;
