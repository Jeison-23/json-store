import React from 'react'
import { Grid } from '@chakra-ui/react'
import { ProductCard } from '../ProductCard'
import { ProductCardLoader } from '../ProductCard/loader'

export const ProductList = (props) => {
  const { data = [], loading, noDetail = false } = props

  return (
    <Grid>
      {
        !loading
          ? data.length
            ? <Grid gap={2} templateColumns={{
              xl: 'repeat(3, auto)',
              lg: 'repeat(2, auto)',
              sm: 'repeat(1, auto)'
            }}>
              {data.map((item, i) => (
                <ProductCard
                  key={i}
                  noDetail={noDetail}
                  {...item}
                />
              ))
              }
            </Grid>
            : 'Sin datos'
          : <ProductCardLoader />
      }
    </Grid>
  )
}
