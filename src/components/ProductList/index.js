import React from 'react'
import { Grid } from '@chakra-ui/react'
import { ProductCard } from '../ProductCard'
import { ProductCardLoader } from '../ProductCard/loader'

export const ProductList = (props) => {
  const { data = [], loading, } = props

  return (
    <Grid>
      {
        !loading
          ? data.length
            ? <Grid gap={2} templateColumns='repeat(3, auto)'>
              {data.map((item, i) => (
                <ProductCard key={i} {...item} />
              ))
              }
            </Grid>
            : 'Sin datos'
          : <ProductCardLoader />
      }
    </Grid>
  )
}
