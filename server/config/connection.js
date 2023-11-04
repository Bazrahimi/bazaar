require('dotenv').config();

const mongoose = require('mongoose');
// for some reason process.env.is undefined resuls undefined
const uri = process.env.MONGODB_URI;

// const uri = "mongodb+srv://bazrahimi:jIspud-putqyj-xojti4@cluster0.6nywhlq.mongodb.net/bazaarDB?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch((err) => console.log(err));

module.exports = mongoose.connection;
