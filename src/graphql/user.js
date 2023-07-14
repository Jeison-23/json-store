import { gql } from "@apollo/client";

export const User = gql`
  query User($filter: userFilter) {
    user(filter: $filter) {
      _id
      id
      typeId
      firstName
      lastName
      image
      email
      phone
      role {
        _id
        rol
      }
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