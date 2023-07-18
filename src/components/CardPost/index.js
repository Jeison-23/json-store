import React from 'react'
import { Button, Flex, Grid, Img, Text } from '@chakra-ui/react'

export const CardPost = (props) => {
  const {
    title,
    type = '',
    images = [],
    description,
    link
  } = props

  return (
    <Grid
      //bg={type === 'info' ? '#4299E1' : 'green'}
      borderRadius='md'
      borderWidth={1}
      minH='300px'
      gap={2}
      px={2}
      py={1}
    >
      <Grid justifyItems='center'>
        <Text
          as='b'
          fontSize='2xl'
          textTransform='capitalize'
        >
          {title || 'Title post+'}
        </Text>
      </Grid>

      {images.length
        ? <Grid gap={2} templateColumns={{ xl: `repeat(${images.length >= 2 ? 3 : 1} 1fr)`, sm: '1fr 1fr', xs: '1fr' }} >
          {
            images.map((image, i) => (
              <Img
                justifySelf='center'
                h='270px'
                width='300px'
                src={image}
                key={i}
              />
            ))
          }
        </Grid>
        : undefined
      }
      <Text _firstLetter={{textTransform: 'uppercase'}} fontSize='lg' justifySelf='center'>
        {description}
      </Text>

      <Flex>
        {link ? <Button variant='outline' justifySelf='end'>Go</Button>
          : undefined
        }
      </Flex>
    </Grid>
  )
}
