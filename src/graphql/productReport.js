import { gql } from "@apollo/client";

export const ProductReport = gql`
  query ProductReport($filter: productReportFilter) {
    productReport(filter: $filter)
  }
`