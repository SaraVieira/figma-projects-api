import { gql } from 'apollo-boost'

export default gql`
  query getComments {
    comments @client {
      id
      user {
        img_url
        handle
      }
      message
      children {
        id
        user {
          img_url
          handle
        }
        message
      }
    }
  }
`
