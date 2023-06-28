import React from 'react'
import { Box, Divider, Grid, Image, Text } from '@chakra-ui/react'

export const UserList = () => {

  return (
    <Grid gap={2} templateColumns='1fr 1fr 1fr'>
      <Grid p={1} gap={2} borderWidth={1} borderRadius={10} templateColumns='1fr auto 1fr'>
        <Image justifySelf='center' w='200px' h='130px' src='https://m.media-amazon.com/images/I/61DpzbmqsWL.jpg' />
        <Divider orientation='vertical' />
        <Box>
          <Text>Nombre: mclovin</Text>
          <Text>phone: 109-323-435</Text>
          <Text>email: emailnofake@hotmail.com</Text>
        </Box>
      </Grid>
    </Grid>
  )
}
