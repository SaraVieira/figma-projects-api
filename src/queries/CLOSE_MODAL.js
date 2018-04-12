import gql from "graphql-tag";

export default gql`
  mutation closeModal {
    closeModal @client
  }
`;
