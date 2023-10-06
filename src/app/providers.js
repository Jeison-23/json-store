'use client'

import { ApolloProvider } from "@apollo/client"
import { client } from "@/helpers/ApolloSettings"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, theme } from "@chakra-ui/react"
import ShoppingCartContextProvider from "@/context/ShoppingCartContext"

export const Providers = ({ children }) => {

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={client} >
          <ShoppingCartContextProvider>
            {children}
          </ShoppingCartContextProvider>
        </ApolloProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}
