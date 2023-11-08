'use client'

import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { useAdminHomeContainer } from '@/hooks/useAdminHomeContainer'

export const AdminHomeContainer = () => {
  const { data } = useAdminHomeContainer()

  return (
    <Grid m={4}>
      <Grid p={4} gap={4} templateColumns='1fr 1fr 1fr 1fr'  >
        <Grid pt={2} templateColumns='auto auto' h='300px' bg='red.700' justifyItems='center'  >
          {data?.topProducts ?
            data.topProducts.map((ele, i) => (
              <Box key={i} h='70px' w='120px' bg='red.400' >
                {ele.name} x{ele.quantity}
              </Box>
              )
            )
            : 'sin resultados'
          }
        </Grid>
        <Grid  h='200px' bg='red.700' justifyContent='center' alignItems='center' >
          asdasd
        </Grid>

        <Grid  h='100px' bg='red.700' justifyContent='center' alignItems='center'  >
          {data?.sales?.totalSales.toLocaleString('in',{style: 'currency', currency: 'cop'})}
        </Grid>
      </Grid>
    </Grid>
  )
}
