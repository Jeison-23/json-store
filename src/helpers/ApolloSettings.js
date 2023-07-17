import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client"
import { setContext } from "@apollo/client/link/context";


const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "apollo-require-preflight": true,
    },
  };
}).concat(
  createUploadLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_GATEWAY,
  })
);

export const client = new ApolloClient({
  link: authLink,
  cache: new InMemoryCache()
})
