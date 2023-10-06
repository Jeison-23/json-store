import React, { useContext } from 'react'
import { Box, Divider, Flex, Grid, Text } from '@chakra-ui/react'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'
import moment from 'moment'

export const PayInvoice = () => {
  const { count, countAll, priceTotal, productsSelected } = useContext(ShoppingCartContext)

  return (
    <Grid templateRows='auto auto 1fr' >
      <Text as='b' fontSize='2xl' justifySelf='center' >Factura por compra</Text>
      <Text as='b' fontSize='2xl' >Factura por compra</Text>

      <Box h='90%' color='#111111' p={2} bg={`no-repeat url('./images/bgInvoice.jpeg') center center `} bgSize='cover' >
        <Flex justifyContent='space-between' alignItems='end'>
          <Text as='b' fontSize='3xl' >Json Store</Text>
          <Text as='b' fontSize='lg'  >{moment().format('DD/ MM/ YY')}</Text>
        </Flex>
        <Text>
          Detalles de la compra
        </Text>
        <Box mt={2} h='90%' overflowX='hidden' overflow='auto' >
          <Grid templateColumns='1fr 1fr 1fr' >
            <Text as='b' >Nombre</Text>
            <Text as='b' >Cantidad</Text>
            <Text as='b' >Precio unitario</Text>
          </Grid>
          {count ?
            productsSelected.map((prod, i) => (
              <Grid key={i}>
                <Grid gap={2} templateColumns='1fr 1fr 1fr' >
                  <Text>{prod.name}</Text>
                  <Text >{prod.quantity}</Text>
                  <Text >{prod.price.toLocaleString('en', { style: 'currency', currency: 'COP' })}</Text>
                </Grid>
                <Divider bg='black' />
              </Grid>
            ))
            : 'sin data'
          }
          <Grid mt={7} justifyContent='end' >
            <Grid gap={1} templateColumns='auto auto' >
              <Text as='b' >Productos totales: </Text>
              <Text justifySelf='end'>
                {count.toLocaleString('de')}
              </Text>

              <Text as='b'>Cantidad total: </Text>
              <Text justifySelf='end'>
                {countAll.toLocaleString('de')}
              </Text>

              <Text as='b'>Total a pagar: </Text>
              <Text justifySelf='end'>
                {priceTotal.toLocaleString('en',{style: 'currency', currency: 'COP'})}
              </Text>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </Grid>
  )
}
