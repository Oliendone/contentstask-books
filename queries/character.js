import gql from 'graphql-tag'

export const BOOKS_QUERY = gql`
    query Books {
        all_book_page {
            items {
                book_s_author
                title
                rich_text
                number_of_pages
                link_to_shop {
                    href
                }
                system {
                    uid
                }
            }
        }
    }
`
