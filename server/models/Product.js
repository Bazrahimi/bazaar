const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    enum: ['Electronic', 'Fashion', 'Home and Garden', 'Book']
  },

  imageURLs: {
    type: [String],
    required: true,
    default: []
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 1
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
}, 
{
  // This will automatically set createdAt and updatedAt
  timestamps: true
});

//create the Product model from the schema
const Product = model('Product', productSchema);

module.exports = Product;
