import { gql } from 'apollo-boost'

export default gql`
  query getComments($id: String!) {
    comments(id: $id) {
      id
      user {
        img_url
        handle
      }
      message
      created_at
      parent_id
    }
  }
`
