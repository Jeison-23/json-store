import React, { useContext } from 'react'
import moment from 'moment'
import { Box, Divider, Flex, Grid, Text } from '@chakra-ui/react'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'

export const PayInvoice = () => {
  const {
    count,
    countAll,
    priceTotal,
    productsSelected
  } = useContext(ShoppingCartContext)

  return (
    <Grid gap={2} h='86vh' templateRows='auto auto 1fr auto' >
      <Text as='b' fontSize='2xl' justifySelf='center' >Factura por compra</Text>
      <Text as='b' fontSize='lg' >Previsualización de la factura*</Text>

      <Box
        p={2}
        h='100%'
        overflow='hidden'
        color='#111111'
        bg={`no-repeat url('./images/bgInvoice.jpeg') center center `}
        bgSize='cover'
      >
        <Flex justifyContent='space-between' alignItems='end'>
          <Text as='b' fontSize='3xl' >Json Store</Text>
          <Text as='b'  >{moment().format('DD / MM / YYYY')}</Text>
        </Flex>
        <Text maxW='250px' noOfLines={2}>
          Detalles de la compra
        </Text>

        <Grid templateColumns='1fr 1fr 1fr' >
          <Text as='b' >Nombre</Text>
          <Text as='b' >Cantidad</Text>
          <Text as='b' >Precio unitario</Text>
        </Grid>
        <Box
          mt={2}
          h='50%'
          overflow='auto'
          overflowX='hidden'
        >
          {count ?
            productsSelected.map((prod, i) => (
              <Grid key={i}>
                <Grid gap={2} templateColumns='1fr 1fr 1fr' >
                  <Text>{prod.name}</Text>
                  <Text >{prod.quantity}</Text>
                  <Text >{prod.price.toLocaleString('en', { style: 'currency', currency: 'COP' })}</Text>
                </Grid>
                <Divider color='#111111' />
              </Grid>
            ))
            : 'sin data'
          }
        </Box>

        <Grid h='25%'>
          <Grid alignSelf='end' alignItems='end' justifyContent='end' templateColumns='auto auto' >
            <Text as='b' >Productos totales: </Text>
            <Text justifySelf='end'>
              {count.toLocaleString('de')}
            </Text>

            <Text as='b'>Cantidad total: </Text>
            <Text justifySelf='end'>
              {countAll.toLocaleString('de')}
            </Text>

            <Text as='b'>Costo total: </Text>
            <Text justifySelf='end'>
              {priceTotal.toLocaleString('en', { style: 'currency', currency: 'COP' })}
            </Text>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}
