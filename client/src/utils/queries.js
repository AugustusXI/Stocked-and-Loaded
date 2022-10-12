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
export const OUT_OF_STOCK = gql`
  query Query {
    outOfStock {
      name
      inStock
    }
  }
`;
export const ON_ORDER = gql`
  query Query {
    onOrder {
      name
      onOrder
    }
  }
`;
export const TO_ORDER = gql`
  query Query {
    toOrder {
      name
      onOrder
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
`;
