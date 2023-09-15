import React from 'react'
import { FiSun } from 'react-icons/fi'
import { MdOutlineModeNight } from 'react-icons/md'
import { Icon, useColorMode } from '@chakra-ui/react'

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Icon
      //size='sm'
      boxSize={5}
      color='#FFF'
      cursor='pointer'
      onClick={toggleColorMode}
      as={colorMode === 'light' ? MdOutlineModeNight : FiSun }
    />
  )
}
