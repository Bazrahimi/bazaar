const { Product, User } = require('../../models');
const { ObjectId } = require('mongoose').Types;

// required libary and modules for to upload images
const multer = require('multer');
const cloudinary = require('../../utils/cloudinary')

const getTotalProductsCount = async () => {
  return await Product.countDocuments();
};

const productResolvers = {
  Query: {
    getLatestProducts: async () => {
      try {
        const products = await Product.find().sort({ createdAt: -1 });
        const totalProductsCount = await getTotalProductsCount();

        // Return the combined response
        return {
          products,
          totalProductsCount
        };


      } catch (error) {
        console.error('Error fetching all products:', error);
        throw new Error('Failed to fetch products');
      }
    },

    getProductsBySeller: async (parent, { id }) => {
      try {
        const products = await Product.find({ seller: new ObjectId(id) }).exec();
        return products;

      } catch (err) {
        console.error(err);
        throw new Error("Error fetching products for the user.");
      }    
    },
    getProductsByCategory: async (parent, { category }) => {
      try {
        const products = await Product.find( { category: category });
        return products;
      } catch (err) {
        console.error(err);
        throw new Error('Error fetching products for this category');
      }
    },
    getProductsById: async(parent, { id }) => {
      try {
        const product = await Product.findById(id).populate('seller');

        if (!product) {
          throw new Error('Product not found');
      }
        
        return product;
      } catch (err) {
        console.error(err);
        throw new Error('Error Product By its ID');
      }
    },
    getProductsBySearch: async (parent, { term }) => {
      try {
        const regex = new RegExp(term, 'i') // 'i' make the search case-insensitive
        const products = await Product.find({
          $or: [
            {name: { $regex: regex }},
            { category: { $regex: regex }},
            { description: { $regex: regex }}
          ]
        });
        return products;
      } catch (err) {
        console.error(err);
        throw new Error('Error searching products for this term used')
      }
    }
  },
  Mutation: {
    createProduct: async (parent, { name, description, category, imageURLs, price, stock, sellerId }) => {
      try {
        const product = new Product({ name, description, category, imageURLs, price, stock, seller: sellerId });
        const savedProduct = await product.save();
        
        // Add the product ID to the seller's product array
        const seller = await User.findById(sellerId);
        
        // Assuming seller has a products field which is an array
        if(!seller.products) seller.products = [];
        seller.products.push(savedProduct._id);
        await seller.save();

        return savedProduct;
      } catch (error) {
        console.error('Error saving product:', error);
        throw new Error('Failed to create product');
      }
    }
  }
} 


module.exports = productResolvers;
