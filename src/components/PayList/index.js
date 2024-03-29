import React, { useContext } from 'react'
import { ShopingCartProducts } from '../ShopingCartProducts'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'
import { Box, Button, Grid, Text, useDisclosure } from '@chakra-ui/react'
import { ComponentModal } from '@/common/ComponentModal'
import { PayForm } from '../PayForm'

export const PayList = () => {
  const payForm = useDisclosure()
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

      <Button justifySelf='flex-end' colorScheme='green' onClick={payForm.onOpen} >
        pagar
      </Button>

      <ComponentModal
        size='2xl'
        title='Formulario de Pago'
        body={
          <PayForm payForm={payForm} />
        }
        isOpen={payForm.isOpen}
        onClose={payForm.onClose}
      />
    </Grid>
  )
}
