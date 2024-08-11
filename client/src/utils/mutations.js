import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      _id
      email
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_WINE = gql`
mutation addWine($input: WineInput!){
  addWine(input: $input) {
    _id
    productInformation {
      _id
      name
      imagePath
      category
      subcategory
      price
      quantity
    }
    description
    region
    country
    vintage
    natural
    varietal
    volume
    alcoholContent
  }
}
`;

export const UPDATE_WINE = gql`
mutation updateWine($input: WineInput!) {
  updateWine(input: $input) {
    _id
    productInformation {
      _id
      name
      quantity
    }   
  }
}
`;

export const DELETE_WINE = gql`
mutation removeWine($_id: ID!){
  removeWine(_id: $_id) {
    _id 
    name
    products {
      _id
    }
  }
}
`;
