'use client'

import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { client } from "@/helpers/ApolloSettings"
import { ApolloProvider } from "@apollo/client"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, theme } from "@chakra-ui/react"

export const Providers = ({ children }) => {

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={client} >
          <ThemeSwitcher />
          {children}
        </ApolloProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}
