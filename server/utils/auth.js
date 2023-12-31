const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
// I have problem with process.env
// const secret = process.env.JWT_SECRET || 'fallbackSecret';
// const expiration = process.env.JWT_EXPIRATION || '2h';

const secret = "mysecretssshhh"
const expiration = "2h"


module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),

  signToken: function ({ email, firstName, lastName, _id }) {
    const payload = { email, name: `${firstName} ${lastName}`, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
},


};
