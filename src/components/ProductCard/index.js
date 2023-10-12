import React, { useContext, useState } from 'react'
import { Box, Grid, Icon, Img, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'
import { BsCart, BsCartX } from 'react-icons/bs'

export const ProductCard = (props) => {
  const router = useRouter()
  const [hoverCart, setHoverCart] = useState(false)
  const { findProduct, removeProduct, addProduct } = useContext(ShoppingCartContext)

  const {
    _id,
    stock = 0,
    price = 0,
    images = [],
    name = 'name',
    category = { name: 'category' },
    noDetail,
    addCart = false
  } = props

  const shoppingCartHandler = () => {
    const product = { ...props }
    delete product.noDetail
    product.quantity = 1
    !findProduct(_id) ? addProduct(product) : removeProduct(_id)

  }

  return (
    <Grid
      p={2.5}
      gap={2}
      bg='#FFFFFF'
      opacity='0.8'
      borderWidth='1px'
      position='relative'
      _hover={{ filter: 'brightness(95%)' }}
      onMouseEnter={() => addCart && setHoverCart(true)}
      onMouseLeave={() => addCart && setHoverCart(false)}
    >
      {addCart && hoverCart && (
        <Icon
          top={1}
          right={1}
          bg='#FFFFFF'
          color='#000000'
          cursor='pointer'
          position='absolute'
          onClick={shoppingCartHandler}
          as={findProduct(_id) ? BsCartX : BsCart}
        />
      )}
      <Grid
        onClick={() => {
          if (!noDetail) {
            router.replace(`/products/${_id}`)
          }
        }}
        justifyItems='center'
      >
        {
          images.length > 1
            ? <Grid gap={2} templateColumns='1fr auto'>
              <Img h='100%' width='auto' src={images[0]} />
              <Box>
                {images.map((image, i) => i > 0 &&
                  (
                    <Img
                      my={1}
                      key={i}
                      src={image}
                      maxH='90px'
                      maxW='150px'
                      borderWidth='1px'
                    />
                  ))
                }
              </Box>
            </Grid>
            : <Img h='240' maxW='100%' src={images[0] || '/no_image.jpeg'} />
        }
      </Grid>

      <Grid color='#000000' bg='#FFFFFF' >
        <Text textTransform='uppercase' as='b' fontSize='2xl' >{name}</Text>
        <Grid>
          <Text>Precio: {price.toLocaleString('es',{style: 'currency', currency: 'COP'})}</Text>
          <Text>Stock: {stock.toLocaleString('de')}</Text>
          <Text>Categoria: {category?.name}</Text>
        </Grid>
      </Grid>
    </Grid>
  )
}