import { gql } from "@apollo/client";
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      role
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
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      role
      }
    }
  }
`;
