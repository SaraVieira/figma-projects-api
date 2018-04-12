import { gql } from 'apollo-boost'

export const GET_FILES = gql`
  query projectFiles($project: String!) {
    projectFiles(project: $project) {
      key
      name
      thumbnail_url
    }
  }
`

export const GET_PROJECT = gql`
  {
    projects(id: "484668844937890483") {
      id
      name
    }
  }
`
