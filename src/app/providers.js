'use client'

import { ApolloProvider } from "@apollo/client"
import { client } from "@/helpers/ApolloSettings"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, theme } from "@chakra-ui/react"
import ShoppingCartContextProvider from "@/context/ShoppingCartContext"

export const Providers = ({ children }) => {

  return (
    <CacheProvider>
      <ApolloProvider client={client} >
      <ChakraProvider theme={theme}>
          <ShoppingCartContextProvider>
            {children}
          </ShoppingCartContextProvider>
      </ChakraProvider>
    </ApolloProvider>
    </CacheProvider>
  )
}
