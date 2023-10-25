import { gql } from "@apollo/client";

export const Sale = gql`
  query Sale($filter: saleFilter) {
    sale(filter: $filter) {
      _id
      customerID
      customerName
      address
      reciverName
      phone
      cardNumber
      cvv
      purchasedItems {
        _id
        name
        price
        quantity
        category {
          _id
          key
          name
        }
      }
    }
  }
`;

export const SaleSave = gql`
  mutation SaleSave($input: saleInput) {
    saleSave(input: $input)
  }
`;