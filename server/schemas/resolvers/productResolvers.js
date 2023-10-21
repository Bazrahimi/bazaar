const { Product, User } = require('../../models');
const { ObjectId } = require('mongoose').Types;



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
    createProduct: async (parent, { name, description, price, stock, UserId }) => {
      try {
        const product = new Product({ name, description, price, stock, seller: UserId });
        const savedProduct = await product.save();
        
        // Add the product ID to the seller's product array
        const seller = await User.findById(UserId);
        
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
