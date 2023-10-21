const { User } = require('../models')
const bcrypt = require('bcrypt');

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
    },

    // resolver to update user
    updateUser: async (parent, args) => {
      try {
        const { id, ...updates} = args;
        const updateUser = await User.findByIdAndUpdate(id, updates, { new: true });
        return updateUser;
      } catch (error) {
        throw new Error(error);
      }
    },

    // resolver to delete user
    deleteUser: async (parent, { id }) => {
      try {
        const deleteUser = await User.findByIdAndDelete(id);
        return !!deleteUser; // return true if the user was found and deleted/
      } catch (error) {
        throw new Error(error);
      }
    },

    // resolver to change password
    changePassword: async (parent, { id, currentPassword, newPassword }) => {
      try {
        const user = await User.findById(id);

        if (!user) {
          throw new Error('User not found');
        }

        const insMatch = await bcrypt.compare(currentPassword, user.password);

        if (!insMatch) {
          throw new Error('Current password is incorrect');
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();
        return true; // successfully changed password

      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
}

module.exports = resolvers;