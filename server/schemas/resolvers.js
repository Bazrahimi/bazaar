const { User } = require('../models')

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return User.find();
    },
    
    getUser: async (parent, { id }) => {
      return User.findOne({_id: id })
    },
  },

  Mutation: {
    createUser: async (parent, { firstName, lastName, email, password, role, address, contactNumber }) => {
      try {
        const user = new User ({ firstName, lastName, email, password, role: role.toLowerCase(), address, contactNumber });
        return await user.save();

      } catch (error) {
        throw new Error (error);
      }
    }
  }
  
}

module.exports = resolvers;