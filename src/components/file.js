import React from "react";
import { Mutation } from "react-apollo";
import { OPEN_MODAL } from "../queries/";

export default ({ name, id, thumbnail_url }) => (
  <div key={id} className="fl w-50 w-25-m w-20-l pa2">
    <Mutation mutation={OPEN_MODAL} variables={{ id }}>
      {openModal => (
        <a className="db link dim tc pointer" onClick={openModal}>
          <img
            src={thumbnail_url}
            alt={name}
            className="w-100 db outline black-10"
          />
          <dl className="mt2 f6 lh-copy">
            <dt className="clip">Name</dt>
            <dd className="ml0 black truncate w-100">{name}</dd>
          </dl>
        </a>
      )}
    </Mutation>
  </div>
);
