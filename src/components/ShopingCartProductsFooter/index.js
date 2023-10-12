import React, { useContext } from 'react'
import { Button, Grid } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'

export const ShopingCartProductsFooter = ({ shopingCartDrawer }) => {
  const { clearCart, count } = useContext(ShoppingCartContext)
  const router = useRouter()
  const redirect = () => {
    shopingCartDrawer.onClose()
    router.push('/pay-page/')
  }

  return (
    count ?
      <Grid gap={2} templateColumns='1fr 1fr'>
        <Button onClick={redirect} >
          Ir a pagar
        </Button>
        <Button onClick={() => {
          shopingCartDrawer.onClose()
          clearCart()
        }}>
          Limpiar carrito
        </Button>
      </Grid>
      : undefined
  )
}
