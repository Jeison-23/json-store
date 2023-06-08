'use client'

import { Grid, Text } from "@chakra-ui/react"
import Login from "./login/page"

export default function Home() {
  return (
    <Grid h='100vh' alignContent='center' justifyItems='center'>
      <Login />
    </Grid>
  )
}
