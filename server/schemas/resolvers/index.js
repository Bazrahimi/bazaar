const { model } = require('mongoose');
const userResolvers = require('./userResolvers');
const productResolvers = require('./productResolvers')

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...productResolvers.Mutation,
  },
};

module.exports = resolvers;