import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;
export const IN_STOCK = gql`
  query Query {
    inStock {
      name
      inStock
    }
  }
`;
