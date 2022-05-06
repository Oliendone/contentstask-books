import gql from "graphql-tag";

export const BOOKS_QUERY = gql`
  query Books($skip: Int, $limit: Int) {
    all_book_page(skip: $skip, limit: $limit) {
      items {
        title
        imageConnection {
          edges {
            node {
              url
            }
          }
        }
        system {
          uid
        }
      }
      total
    }
  }
`;
