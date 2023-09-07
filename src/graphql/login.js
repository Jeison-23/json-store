const { gql } = require("@apollo/client");

export const Login = gql`
  query Login($input: loginInput) {
    login(input: $input)
  }
`