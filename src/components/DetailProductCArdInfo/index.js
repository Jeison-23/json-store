import React from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineClose } from 'react-icons/ai'
import { Flex, Grid, Icon, Text } from '@chakra-ui/react'
import { DetailProductCardInfoForm } from '../DetailProductCardInfoForm'

export const DetailProductCArdInfo = ({ product }) => {
  const router = useRouter()

  return (
    <Grid
      p={1}
      gap={4}
      h='650px'
      color='#FFFFFF'
      bg='#000111'
      position='relative'
      alignContent='center'
    >
      <Icon
        m={1}
        right={0}
        boxSize={5}
        color='#FFFFFF'
        cursor='pointer'
        position='absolute'
        as={AiOutlineClose}
        onClick={() => router.replace('/products')}
      />

      <Grid >
        <Text
          as='b'
          maxW='490px'
          fontSize='4xl'
          textAlign='center'
        >
          {`${product?.category?.name} - ${product?.name}`}
        </Text>

        <Grid gap={2} mx={7}>
          <Text
            maxW='420px'
            fontSize='xl'
            _firstLetter={{ textTransform: 'uppercase' }}
          >
            {product?.description}
          </Text>

          <Text
            as='b'
            maxW='420px'
            noOfLines={4}
          >
            hay {product?.stock} unidades disponibles
          </Text>

          <Flex gap={1}>
            <Text>
              Precio:
            </Text>
            <Text>
              {product?.price?.toLocaleString('de', { style: "currency", currency: "COP" })}
            </Text>
          </Flex>

          <DetailProductCardInfoForm product={product} />

        </Grid>

      </Grid>

    </Grid>
  )
}
