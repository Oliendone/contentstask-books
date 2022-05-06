import gql from "graphql-tag";

export const MAIN_PAGE_QUERY = gql`
  query Page($locale: String!, $uid: String!) {
    main_page(locale: $locale, uid: $uid) {
      title
      describe_text
      background_imageConnection {
        edges {
          node {
            url
          }
        }
      }
    }
  }
`;
