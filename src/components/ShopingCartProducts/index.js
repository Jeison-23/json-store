import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'
import { Flex, Grid, Icon, Img, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import style from './css/shopingCartProducts.module.css'

export const ShopingCartProducts = ({ shopingCartDrawer }) => {
  const router = useRouter()
  const hoverBg = useColorModeValue('WhiteAlpha.900', 'gray.800')
  const { productsSelected, setProductsSelected } = useContext(ShoppingCartContext)

  const [showRemove, setShowRemove] = useState([])

  const removeProduct = (removeItem) => {
    let products = [...productsSelected]
    products.splice(removeItem, 1)
    setProductsSelected(products);
  }

  const showRemoveHandle = (pos,state) => {
    console.log(state ? 'entro' : 'salio');
    const newArray = [...showRemove]
    newArray[pos] = state

    setShowRemove(newArray)
  }

  const productDetails = (product) => {
    router.replace(`/products/${product._id}`)
    shopingCartDrawer.onClose()
  }

  useEffect(() => {
    if (showRemove.length) {
      console.log(showRemove);
    }
  }, [showRemove])
  
  return (
    <Grid gap={2}>
      {productsSelected.map((product, i) => (
        <Flex
          p={1}
          gap={2}
          key={i}
          wrap='wrap'
          maxH='110px'
          borderRadius='md'
          borderBottom='1px'
          position='relative'
          className={style['product']}
          _hover={{ bg: hoverBg }}
          justifyContent='space-between'
        >
          <Grid
            cursor='pointer'
            gap={2} w='200px'
            onClick={() => productDetails(product)}
          >
            <Text fontSize='lg'>{product.name}</Text>
            <Text >{product.price?.toLocaleString('en', { style: "currency", currency: "COP" })}</Text>
          </Grid>

          <Grid
            h='60px'
            w='60px'
            borderWidth='1px'
            borderRadius={100}
            alignSelf='center'
            alignItems='center'
            justifyContent='center'
          >
            <Text fontSize='2xl' >x{product.quantity}</Text>
          </Grid>

          <Img
            w='100px'
            maxH='100px'
            justifySelf='center'
            src={product?.images[0]}
          />

          { true &&
            <Icon
              top={0}
              right={0}
              boxSize={4}
              className={style['icon']}
              display='none'
              color='gray.800'
              cursor='pointer'
              position='absolute'
              as={AiOutlineClose}
              bg='whiteAlpha.700'
              onClick={() => removeProduct(i)}
            />}
          
        </Flex>
      ))}
    </Grid>
  )
}
