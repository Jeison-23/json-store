import { gql } from "@apollo/client";


export const Role = gql`
  query Role {
    role {
      _id
      key
      rol
      accessKeys
    }
  }
`;

export const RoleSave = gql`
  mutation RoleSave($input: roleInput) {
    roleSave(input: $input)
  }
`;

export const RoleDelete = gql`
  mutation RoleDelete($id: String) {
    roleDelete(_id: $id)
  }
`;