'use client'

import { ApolloProvider } from "@apollo/client"
import { client } from "@/helpers/ApolloSettings"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, theme } from "@chakra-ui/react"
import ShoppingCartContextProvider from "@/context/ShoppingCartContext"
import SessionContextProvider from "@/context/SessionContext"

export const Providers = ({ children }) => {

  return (
    <CacheProvider>
      <ApolloProvider client={client} >
        <ChakraProvider theme={theme}>
          <SessionContextProvider>
            <ShoppingCartContextProvider>
              {children}
            </ShoppingCartContextProvider>
          </SessionContextProvider>
        </ChakraProvider>
      </ApolloProvider>
    </CacheProvider>
  )
}
