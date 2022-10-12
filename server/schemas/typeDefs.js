const { gql } = require("apollo-server-express");
// added query root def
const typeDefs = gql`
  type Query {
    allFood: [Food]
    inStock: [Food]
    outOfStock: [Food]
    onOrder: [Food]
    toOrder: [Food]
    me: User
  }
  type Food {
    _id: ID!
    name: String!
    inStock: Boolean
    onOrder: Boolean
    toOrder: Boolean
    outOfStock: Boolean
  }
  type Mutation {
    update(name: String!): Food
  }
  type User {
    _id: ID
    username: String
    email: String
    role: String
  }
`;

module.exports = typeDefs;
