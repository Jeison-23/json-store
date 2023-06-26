import { gql } from "@apollo/client";

export const User = gql`
  query User {
    user {
      _id
      role {
        _id
        key
        rol
      }
      firstName
      lastName
      phone
      email
      password
    }
  }
`;

export const UserSave = gql`
  mutation UserSave($input: userInput) {
    userSave(input: $input)
  }
`;

export const UserDelete = gql`
  mutation UserDelete($id: String) {
    userDelete(_id: $id)
  }
`;