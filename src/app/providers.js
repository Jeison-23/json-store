'use client'

import { client } from "@/helpers/ApolloSettings"
import { ApolloProvider } from "@apollo/client"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { usePathname } from "next/navigation"

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
