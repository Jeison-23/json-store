import React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button variant='outline' onClick={toggleColorMode}>
      {colorMode === 'light' ? 'Ligth' : 'Dark'}
    </Button>
  )
}
