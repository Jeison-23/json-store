'use client'

import { Grid } from '@chakra-ui/react'
import { useHomeContainer } from '@/hooks/useHomeContainer'
import { ProductCard } from '@/components/ProductCard'

export const HomeContainer = () => {
  const { data, error, loading, refresh } = useHomeContainer()

  return (
    <Grid gap={2} justifyContent='center' >
      home page
      {!error
        ? !loading
          ? <Grid gap={4} templateColumns='repeat(5, 1fr)'>
            {
              data?.product.map((product, i) => <ProductCard key={i} price={product.price} stock={product.stock} name={product.name}  /> )
            }
          </Grid>
          : 'Loading...'
        : 'ha ocurrido un error con el servidor'}
    </Grid>
  )
}
