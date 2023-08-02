import React from 'react'
import { Box, Grid, Img, Text } from '@chakra-ui/react'

export const ProductCard = (props) => {
  const {
    name = 'name',
    images = [],
    stock = 0,
    price = 0,
    category = 'category',
  } = props

  return (
    <Grid bg='#FFFFFF' p={2.5} borderWidth='1px' gap={2} _hover={{ filter: 'brightness(95%)'}}>
      <Grid  justifyItems='center'>
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
        <Grid gap={2} templateColumns='1fr'>
          <Text>precio: ${price}</Text>
          <Text>stock: {stock}</Text>
        </Grid>
      </Grid>
    </Grid>
  )
}