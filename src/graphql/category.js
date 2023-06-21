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

export const CategorySave = gql`
  mutation CategorySave($input: categoryInput) {
    categorySave(input: $input)
  }
`

export const CategoryDelete = gql`
  mutation CategoryDelete($id: String) {
    categoryDelete(_id: $id)
  }
`
