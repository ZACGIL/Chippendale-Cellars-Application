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

export const LATEST_BEERS = gql`
query latestBeers{
  latestBeers {
    _id
    packSize
    productInformation {
      _id
      name
      quantity
      price
      subcategory
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

export const GET_SINGLE_WINE = gql`
query getWine($_id: ID!){
  wine(_id: $_id){
    _id
    description
    varietal
    producer
    region
    country
    vintage
    volume
    natural
    alcoholContent
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

export const GET_SINGLE_BEER = gql`
query getBeer($_id: ID!){
  beer(_id: $_id){
    _id
    description
    brewery
    country
    packSize
    volume
    alcoholContent
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

export const GET_CATEGORY = gql`
query getCategory{
  category {
    _id
    name
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