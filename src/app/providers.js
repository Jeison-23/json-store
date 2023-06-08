'use client'

import { client } from "@/helpers/apolloSettings"
import { ApolloProvider } from "@apollo/client"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"

export const Providers = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <ApolloProvider client={client} >
        {children}
        </ApolloProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}
