import React, { useContext } from 'react'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'
import { Grid} from '@chakra-ui/react'
import { ShopingCartProductsList } from '../ShopingCartProductsList'

export const ShopingCartProducts = ({ shopingCartDrawer = {}, payPage = false }) => {
  const { productsSelected, removeProduct } = useContext(ShoppingCartContext)

  return (
    <Grid gap={2}>
      {productsSelected.map((product, i) => (
        <ShopingCartProductsList
          key={i}
          product={product}
          payPage={payPage}
          removeProduct={removeProduct}
          shopingCartDrawer={shopingCartDrawer}
        />
      ))}
    </Grid>
  )
}
