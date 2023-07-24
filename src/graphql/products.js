import { gql } from "@apollo/client";

export const Product = gql`
  query Product {
    product {
      _id
      name
      images
      description
      category {
        _id
        key
        name
      }
      price
      stock
    }
  }
`

export const ProductSave = gql`
  mutation ProductSave($input: productInput) {
    productSave(input: $input)
  }
`

export const ProductDelete = gql`
  mutation ProductDelete($ids: [String]!) {
    productDelete(ids: $ids)
  }
`
