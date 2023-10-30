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

    MostViewedProducts: async () => {
      try {
        // Find products sorted by viewCount in descending order
        const products = await Product.find().sort({ viewCount: -1 });
        const totalProductsCount = await Product.countDocuments();

        return {
          products,
          totalProductsCount
        };

      } catch (error) {
        console.error('Error fetching most viewed products:', error);
        throw new Error('Failed to fetch most viewed products');
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
    },

    incrementProductViewCount: async (_, { id }) => {
      try {
        const product = await Product.findByIdAndUpdate(
          id,
          { $inc: { viewCount: 1 } }, // Increment viewCount by 1
          { new: true } // Return the updated product
        );
        return product;
      } catch (error) {
        console.error('Error incrementing product view count:', error);
        throw error;
      }
    },

    deleteProduct: async (_, { id }) => {
      try {
        // Find the product to delete
        const productToDelete = await Product.findById(id);
        if (!productToDelete) {
          console.error('Error deleting product: Product not found');
          return false;
        }

        // Delete the product
        await Product.findByIdAndDelete(id);

        // Remove the product from the seller's product list
        await User.findByIdAndUpdate(productToDelete.seller, { $pull: { products: productToDelete._id } });

        return true; // Indicate success
      } catch (error) {
        console.error('Error deleting product:', error);
        return false;
      }
    }
  }
}

    


 

  



module.exports = productResolvers;
