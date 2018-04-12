import React from 'react'
import { render } from 'react-dom'
import Main from './main'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { defaults, resolvers } from './state.js'

import 'tachyons'

export const client = new ApolloClient({
  uri: 'https://figma-graphql-lcpitdqttc.now.sh/graphql',
  clientState: {
    defaults,
    resolvers
  }
})

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
)

render(<App />, document.getElementById('root'))
