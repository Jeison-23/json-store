import React, { useRef } from 'react'
import { Box, useOutsideClick } from '@chakra-ui/react'

export const HandleClickOutside = ({ click = () => { }, children }) => {
  const ref = useRef()

  useOutsideClick({
    ref: ref,
    handler: () => click(),
  })

  return (
    <Box ref={ref}>
      {children}
    </Box>
  )
}
