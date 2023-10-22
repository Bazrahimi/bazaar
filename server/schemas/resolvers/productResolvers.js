const { Product, User } = require('../../models');
const { ObjectId } = require('mongoose').Types;

// required libary and modules for to upload images
const multer = require('multer');
const cloudinary = require('../../utils/cloudinary')



const productResolvers = {
  Query: {
    getAllProducts: async () => {
      try {
        return await Product.find();
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
 
  
    }
  },
  Mutation: {
    // createProduct: async (parent, { name, description, imageURLs, price, stock, sellerId }) => {
    //   try {
    //     const product = new Product({ name, description, imageURLs, price, stock, seller: sellerId });
    //     const savedProduct = await product.save();
        
    //     // Add the product ID to the seller's product array
    //     const seller = await User.findById(sellerId);
        
    //     // Assuming seller has a products field which is an array
    //     if(!seller.products) seller.products = [];
    //     seller.products.push(savedProduct._id);
    //     await seller.save();

    //     return savedProduct;
    //   } catch (error) {
    //     console.error('Error saving product:', error);
    //     throw new Error('Failed to create product');
    //   }
    // }
    createProduct: async (parent, { name, description, imageURLs, price, stock, sellerId }) => {
      try {
        // Upload images to Cloudinary and get the resulting URLs
        let uploadedImageURLs = [];
        
        for(let imageURL of imageURLs) {
          const result = await cloudinary.uploader.upload(imageURL);
          uploadedImageURLs.push(result.secure_url);
        }
    
        const product = new Product({
          name, 
          description, 
          imageURLs: uploadedImageURLs, 
          price, 
          stock, 
          seller: sellerId 
        });
        
        const savedProduct = await product.save();
    
        // Rest of your logic remains the same...
    
        return savedProduct;
      } catch (error) {
        console.error('Error saving product:', error);
        throw new Error('Failed to create product');
      }
    }
    

    
  }
}

module.exports = productResolvers;
