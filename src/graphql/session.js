import { gql } from "@apollo/client"

export const Session = gql`
  query Session($filter: sessionInput) {
    session(filter: $filter) {
      _id
      email
      userId
      lastName
      firstName
      image
      typeId
      id
      role {
        _id
        rol
        accessKeys
      }
    }
  }
`