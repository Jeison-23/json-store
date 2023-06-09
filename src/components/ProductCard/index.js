import React from 'react'
import { Grid, Text } from '@chakra-ui/react'


export const ProductCard = (props) => {
  const {
    name = 'name',
    stock = 0,
    price = 0,
    category = 'category',
  } = props

  return (
    <Grid p={1} borderWidth='1px' justifyItems='center' gap={2}>
      <Text>{name}</Text>
      <Grid gap={2} templateColumns='auto auto'>
        <Text>stock: {stock}</Text>
        <Text>precio: {price}</Text>
      </Grid>
    </Grid>
  )
}
