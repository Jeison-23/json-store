import { gql } from "@apollo/client";

export const Post = gql`
  query Post {
    post {
      _id
      type
      title
      images
      description
      link
    }
  }
`