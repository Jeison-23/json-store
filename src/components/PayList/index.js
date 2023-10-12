import React, { useContext } from 'react'
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import { ShopingCartProducts } from '../ShopingCartProducts'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'

export const PayList = () => {

  const { count, countAll, priceTotal } = useContext(ShoppingCartContext)

  return (
    <Grid gap={2} h='86vh' templateRows='auto auto 1fr auto' >
      <Text justifySelf='center' as='b' fontSize='2xl'>
        Pago de productos.
      </Text>
      <Text as='b'>
        Productos en carrito {count}
      </Text>
      <Box
        h='90%'
        overflow='auto'
        overflowX='hidden'
      >
        <ShopingCartProducts payPage />
      </Box>
      <Grid p={2} borderWidth='1px' templateColumns='1fr auto'>
        <Text> Cantidad total de Productos </Text>
        <Text justifySelf='end'>
          {countAll.toLocaleString('de')}
        </Text>
        
        {/* <Text> descuento total </Text>
        <Text justifySelf='end'> 6,500.00 </Text> */}

        <Text> Total a pagar </Text>
        <Text justifySelf='end'>
          {priceTotal.toLocaleString('en',{style:'currency', currency: 'COP'})}
        </Text>
      </Grid>
      <Button justifySelf='flex-end' colorScheme='green' >
        pagar
      </Button>
    </Grid>
  )
}
