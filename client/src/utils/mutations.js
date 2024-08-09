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

// export const SAVE_BOOK = gql`
//     mutation saveBook($input: BookInfo) {
//     saveBook(input: $input) {
//       _id
//       savedBooks {
//         authors
//         description
//         bookId
//         title
//       }
//     }
//   }
// `;

// export const REMOVE_BOOK = gql`
//   mutation removeBook($bookId: String!) {
//     removeBook(bookId: $bookId) {
//       _id
//       savedBooks  {
//         authors
//         description
//         bookId
//         title
//       }
//     }
//   }
// `;
