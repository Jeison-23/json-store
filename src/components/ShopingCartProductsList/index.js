import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineClose } from 'react-icons/ai'
import { Flex, Grid, Icon, Img, Text, useColorModeValue } from '@chakra-ui/react'

export const ShopingCartProductsList = (props) => {
  const {
    payPage = false,
    product,
    shopingCartDrawer,
    removeProduct
  } = props

  const router = useRouter()
  const [showRemove, setShowRemove] = useState(false)
  const BordColor = useColorModeValue('#E2E8F0', '#A0AEC0')
  const hoverBg = useColorModeValue('WhiteAlpha.900', 'gray.800')

  const productDetails = (product) => {
    router.replace(`/products/${product._id}`)
    !payPage && shopingCartDrawer.onClose()
  }

  return (
    <Flex
      p={1}
      gap={2}
      wrap='wrap'
      maxH='110px'
      borderRadius='md'
      borderBottom={`1px solid ${BordColor}`}
      position='relative'
      _hover={{ bg: hoverBg }}
      justifyContent='space-between'
      onMouseEnter={() => setShowRemove(true)}
      onMouseLeave={() => setShowRemove(false)}
    >
      <Grid
        cursor='pointer'
        gap={2} w='200px'
        onClick={() =>  productDetails(product)}
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

      {showRemove &&
        <Icon
          top={0}
          right={0}
          boxSize={4}
          color='gray.800'
          cursor='pointer'
          position='absolute'
          as={AiOutlineClose}
          bg='whiteAlpha.700'
          onClick={() => removeProduct(product._id)}
        />}

    </Flex>
  )
}
