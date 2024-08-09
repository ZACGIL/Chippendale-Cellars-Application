import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedBooks  {
        authors
        description
        bookId
        title
      }
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks  {
        authors
        description
        title
        bookId
      }
    }
  }
`;

export const LATEST_WINES = gql`
query latestWines{
  latestWines {
    _id
    varietal
    productInformation {
      _id
      name
      quantity
      price
    }
  }
}
`