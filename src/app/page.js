'use client'

import { Grid, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <Grid h='100vh' alignContent='center' justifyItems='center'>
      <Text as='a' fontSize='6xl'>
        ¡hello world!
      </Text>
    </Grid>
  )
}
