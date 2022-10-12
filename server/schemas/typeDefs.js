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
    users: [User]
    user(username: String!): User
  }
  type Food {
    _id: ID!
    name: String!
    inStock: Boolean
    onOrder: Boolean
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    role: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
