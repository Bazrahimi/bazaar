const resolvers = {
  Query: {
    getAllUser: async () => {
      return User.find();
    },
    
    getUser: async (parent, { id }) => {
      return User.finOne({_id: id })
    },
  },
  
}