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

export const PostSave = gql`
  mutation PostSave($input: postInput) {
    postSave(input: $input)
  }
`