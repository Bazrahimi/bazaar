const { User } = require('../../models')
const bcrypt = require('bcrypt');
const { signToken, AuthenticationError } = require('../../utils/auth');


const userResolvers = {
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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError
      }

      const token = signToken(user);
      return { token, user };
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
        return "Password changed successfully"; 

      } catch (error) {
        throw new Error(error);
      }
    },

    // resover to suspend seller
    suspendSeller: async (parent, { id }, context) => {
      // Ensure the requester is an admin
      if (context.user.rol !== 'admin') {
        throw new Error('Only admins can suspend seller');
      }

      const seller = await User.findById(id);
      if (!seller || seller.role !== 'seller') {
        throw new Error('User not found or not a seller');
      }

      seller.status = 'suspended';
      await seller.save();
      return seller;
    },

      // resolver to promote an user to admin
    promoteToAdmin: async (parent, { id }, context) => {
      // Ensure the requester is a superadmin
      if (context.user.role !== 'superadmin') {
        throw new Error('Only superadmins can promote to admin')
      }

      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not Found');
      }

      user.role = 'admin';
      await user.save();
      return user;
    }
  },
};

module.exports = userResolvers;