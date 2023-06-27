'use client'

import React from 'react'
import { Box, Grid } from '@chakra-ui/react'

export const AdminHomeContainer = () => {
  return (
    <Grid m={4}>
      <Grid p={4} gap={4} templateColumns='1fr 1fr 1fr 1fr'  >
        <Box  h='400px' bg='red' >
          asdasd
        </Box>
        <Box  h='200px' bg='red' >
          asdasd
        </Box>

        <Box  h='100px' bg='red' >
          asdasd
        </Box>
      </Grid>
    </Grid>
  )
}
