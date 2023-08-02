import React from 'react'
import Link from 'next/link'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Box, Flex, Grid, Icon, Text } from '@chakra-ui/react'

export const NavbarMainLayout = ({ children }) => {

  return (
    <Box>
      <Grid
        p={4}
        gap={4}
        bg='blue.900'
        color='#FFFFFF'
        templateColumns='1fr 1fr 1fr'
      >
        <Flex justifyContent='start'>
          <Link href='/home-page'>
            <Flex
              p={2}
              gap={2}
              cursor='pointer'
              alignItems='center'
              borderRadius='10px'
            >
              <Icon as={AiOutlineAppstoreAdd} boxSize={7} />
              <Text
                as='b'
                fontSize='3xl'
              >
                Json Store
              </Text>
            </Flex>
          </Link>
        </Flex>

        <Flex
          p={2}
          gap={2}
          alignItems='center'
        >
          <Link href='/products'>
          <Text
            cursor='pointer'
            _hover={{}}
          >
            Productos
          </Text>
          </Link>
        </Flex>

        <Flex
          gap={2}
          alignItems='center'
          justifyContent='flex-end'
        >
          
          Opciones de usuarios
        </Flex>
      </Grid>

      <Box
        overflowX='hidden' overflowY='auto' h='calc(100vh - 93px)'
      >
        {children}
      </Box>
    </Box>
  )
}