import React from 'react'
import { Query } from 'react-apollo'
import './loading.css'

export default ({ children, ...props }) => (
  <Query {...props}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        )
      if (error) return `Error!: ${error}`
      return children(data)
    }}
  </Query>
)
