import React from 'react'
import { Grid } from '@chakra-ui/react'
import { ProductCard } from '../ProductCard'

export const ProductList = (props) => {
  const { data = [], loading, } = props

  return (
    <Grid>
      {
        !loading
          ? data.length
            ? <Grid gap={2} templateColumns='1fr 1fr 1fr'>
              {data.map((item, i) => (
                <ProductCard key={i} {...item} />
              ))
              }
            </Grid>
            : 'sin datos'
          : 'loading'
      }
    </Grid>
  )
}
