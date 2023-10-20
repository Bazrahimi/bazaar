const { Schema, model, default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
    unique: true,
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
    minLength: 6
  },

  role: {
    type: String,
    enum: ['buyer', 'seller'], // Restricting the the role of user
    required: true,
  },

});

// Middleware to hash password before saving the user.
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10); // Hashing round of salt
  }
  next();
});

// Create the user model from the schema 
const User = model('User', userSchema);

module.exports = User;