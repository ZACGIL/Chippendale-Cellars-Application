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

export const GET_WINES = gql`
query getWines{
  wines {
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

export const GET_BEERS = gql`
query getBeers{
  beers {
    _id
    packSize
    productInformation {
      _id
      name
      quantity
      price
      category
      subcategory
    }
  }
}
`

export const GET_SUBCATEGORY = gql`
query getSubcategory{
  subcategory {
    _id
    name
  }
}
`