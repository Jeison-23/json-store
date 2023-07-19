import React from 'react'
import { Image } from '@chakra-ui/react'

export const PreviewImage = ({ url }) => {
  return (
    <Image
      w='222px'
      h='152px'
      src={url}
    />
  )
}
