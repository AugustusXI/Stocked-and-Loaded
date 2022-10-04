const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Food {
    _id: ID!
    name: String!
    inStock: Boolean
    onOrder: Boolean
    toOrder: Boolean
    outOfStock: Boolean
  }

  type User {
    _id: ID
    username: String
    email: String
    role: String
  }
`;

module.exports = typeDefs;
