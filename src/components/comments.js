import React from 'react'

import { Query, Comment } from './'
import { GET_COMMENTS } from '../queries/'

export default ({ shownFile }) => (
  <ul className="list pl0 mt0 measure center avenir">
    <Query query={GET_COMMENTS}>
      {({ comments }) => {
        return comments.length ? (
          comments.map(({ message, children, ...rest }) => (
            <Comment children={children} message={message} {...rest} />
          ))
        ) : (
          <h2 className="f4 fw4 pa3 mv0">No Comments</h2>
        )
      }}
    </Query>
  </ul>
)
