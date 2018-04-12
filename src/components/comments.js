import React from 'react'

import { Query, Comment } from './'
import { GET_COMMENTS } from '../queries/'

export default ({ shownFile }) => (
  <ul className="list pl0 mt0 measure center">
    <Query query={GET_COMMENTS}>
      {({ comments }) =>
        comments
          .map(({ message, children, ...rest }) => (
            <Comment children={children} message={message} {...rest} />
          ))
          .reverse()
      }
    </Query>
  </ul>
)
