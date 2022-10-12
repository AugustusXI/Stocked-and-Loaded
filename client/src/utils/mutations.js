import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE = gql`
  mutation update($name: String!, $inStock: Boolean!, $onOrder: Boolean!) {
    update(name: $name, inStock: $inStock, onOrder: $onOrder) {
      Food {
        name
        inStock
        onOrder
      }
    }
  }
`;
export const UPDATE = gql`
  mutation update($name: String!, $inStock: Boolean!, $onOrder: Boolean!) {
    update(name: $name, inStock: $inStock, onOrder: $onOrder) {
      Food {
        name
        inStock
        onOrder
      }
    }
  }
`;
