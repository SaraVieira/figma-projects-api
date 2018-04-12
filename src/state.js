import { GET_COMMENTS } from "./queries/";
import { client } from "./";
import { fixComments } from "./utils.js";

export const defaults = {
  modal: {
    modalIsOpen: false,
    shownFile: null,
    __typename: "modal"
  },
  comments: []
};

export const resolvers = {
  Mutation: {
    openModal: async (_, { id }, { cache }) => {
      const query = await client.query({
        query: GET_COMMENTS,
        variables: { id }
      });

      const comments = fixComments(query.data.comments);

      const data = {
        modal: {
          modalIsOpen: true,
          shownFile: id,
          __typename: "modal"
        },
        comments
      };

      await cache.writeData({ data });
    },
    closeModal: (_, d, { cache }) => {
      cache.writeData({ data: defaults });
    }
  }
};
