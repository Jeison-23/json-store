import React from 'react'
import { Box, Button, Flex, Grid, Img, Text } from '@chakra-ui/react'
import moment from 'moment/moment'

export const CardPost = (props) => {
  const {
    title,
    type = '',
    images = [],
    description,
    createAt,
    link
  } = props

  return (
    <Box>
      <Grid justifyItems='flex-end' px={2}>
        <Text>{moment(createAt).format('DD MMM YY - hh:mm a')}</Text>
      </Grid>
      <Grid
        borderRadius='lg'
        borderWidth={1}
        minH='130px'
        gap={1}
      >
        <Grid
          minH='10px'
          borderTopRadius='lg'
          justifyItems='center'
          alignItems='center'
          color='#FFFFFF'
          bg={type === 'info' ? 'blue.700' : type === 'warn' ? 'red.700' : type === 'prom' ? 'yellow.500' : 'gray.400'}
        >
          <Text
            as='b'
            fontSize='2xl'
            textTransform='capitalize'
          >
            {title || 'Title post+'}
          </Text>
        </Grid>

        <Grid px={2} paddingBottom={2} gap={4}>
          {images.length
            ? <Grid gap={2} templateColumns={`repeat(${images.length >= 2 ? 3 : 1}, auto)`} >
              {
                images.map((image, i) => (
                  <Img
                    justifySelf='center'
                    maxH='270px'
                    maxW='300px'
                    src={image}
                    key={i}
                  />
                ))
              }
            </Grid>
            : undefined
          }
          <Grid>
            <Text _firstLetter={{ textTransform: 'uppercase' }} fontSize='lg' alignSelf='center' justifySelf='center'>
              {description}
            </Text>
          </Grid>

          {link ?
            <Flex>
              <Button variant='outline' justifySelf='end'>Ir</Button>
            </Flex>
            : undefined}
        </Grid>

      </Grid>
    </Box>
  )
}
