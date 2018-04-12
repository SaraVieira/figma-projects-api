import { gql } from 'apollo-boost'

export default gql`
  {
    modal @client {
      modalIsOpen
      shownFile
    }
  }
`
