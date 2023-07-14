import React from 'react'
import { Box, Image } from '@chakra-ui/react'

export const PreviewImage = ({ url }) => {
  return (
    /*<Box
      w='220px'
      h='150px'
      // bgPos='center'
      bgSize='contain'
      bgRepeat='no-repeat'
      bgImage={url}
    />*/
    <Box
      //borderWidth='1px'
      w='222px'
      h='152px'
    >
      <Image
      //margin='0 auto'
        w='auto'
        h='100%'
        src={url}
      />
    </Box>
  )
}
