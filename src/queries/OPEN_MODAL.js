import gql from "graphql-tag";

export default gql`
  mutation openModal($id: Int!) {
    openModal(id: $id) @client
  }
`;
