import React from 'react'
import { GET_FILES } from '../queries/'

import { File, Query } from './'

export default ({ id, name }) => (
  <div key={id} className="avenir">
    <h1 className="f3 fw4 pa3 mv0">{name}</h1>
    <h2 className="f4 fw4 pa3 mv0">Files</h2>
    <div className="cf pa2">
      <Query query={GET_FILES} variables={{ project: id }}>
        {({ projectFiles }) =>
          projectFiles.map(props => <File {...props} id={props.key} />)
        }
      </Query>
    </div>
  </div>
)
