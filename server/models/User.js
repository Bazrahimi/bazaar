const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 2
  },
  role: {
    type: String,
    enum: ['buyer', 'seller'], // Restricting the the role of user
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'suspended'],
    default: 'active'
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
});
// Middleware to hash password before saving the user.
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10); // Hashing round of salt
  }
  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};


// Create the user model from the schema 
const User = model('User', userSchema);

module.exports = User;