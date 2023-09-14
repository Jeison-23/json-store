import React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      size='sm'
      bg='gray.900'
      color='#FFF'
      //variant='link'
      onClick={toggleColorMode}
      _hover={{ bg: 'gray.700' }}
    >
      {colorMode === 'light' ? 'Ligth' : 'Dark'}
    </Button>
  )
}
