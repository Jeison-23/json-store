import React, { useContext } from 'react'
import { Grid } from '@chakra-ui/react'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'

export const ShopingcartProductsCount = () => {
  const { productsSelected } = useContext(ShoppingCartContext)
  const total = productsSelected.length

  return (
    total > 0 ?
      <Grid
        left={2.5}
        top='-2'
        bg='red.500'
        color='white'
        p={total < 10 ? '2px 6px' : '2.5px 3.5px'}
        fontSize='9px'
        alignItems='center'
        position='absolute'
        borderRadius={50}
      >
        {total}
      </Grid>
      : undefined
  )
}
