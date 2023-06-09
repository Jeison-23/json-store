'use client'

import { client } from "@/helpers/ApolloSettings"
import { ApolloProvider } from "@apollo/client"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { usePathname } from "next/navigation"

export const Providers = ({ children }) => {
  const path = usePathname()
  const render = () => {
    const element = ''
    if (path) {
      
    }
    return
  }
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
