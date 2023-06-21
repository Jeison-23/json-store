import React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? 'Ligth' : 'Dark'}
    </Button>
  )
}
