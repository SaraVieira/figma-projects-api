import React, { Fragment } from "react";
import Modal from "react-modal";
import { Mutation } from "react-apollo";

import { Query, Project, Comments } from "./components/";
import { GET_MODAL, CLOSE_MODAL, GET_PROJECT } from "./queries/";

export default () => (
  <div className="w-80 center">
    <Query query={GET_PROJECT}>
      {({ projects }) => projects.map(props => <Project {...props} />)}
    </Query>
    <Query query={GET_MODAL}>
      {({ modal: { modalIsOpen, shownFile } }) => (
        <Mutation mutation={CLOSE_MODAL}>
          {closeModal => (
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
              <Comments shownFile={shownFile} />
            </Modal>
          )}
        </Mutation>
      )}
    </Query>
  </div>
);
