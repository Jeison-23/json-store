import { gql } from "@apollo/client";

export const category = gql`
  query Category {
    category {
      _id
      key
      name
    }
  }
`
