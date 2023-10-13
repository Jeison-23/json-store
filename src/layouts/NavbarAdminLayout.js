import React from 'react'
import Link from 'next/link'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Box, Flex, Grid, Icon, Text } from '@chakra-ui/react'

export const NavbarAdminLayout = ({ children, path }) => {

  return (
    <Box>
      <Grid
        p={4}
        gap={4}
        bg='#000000'
        color='#FFFFFF'
        templateColumns='1fr 1fr 1fr'
      >
        <Flex justifyContent='start'>
          <Link href='/admin/home'>
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
          justifyContent='space-between'
        >
          <Link href='/admin/posts'>
          <Text
            as={path === '/admin/posts' && 'b'}
            cursor='pointer'
          >
            Administración
          </Text>
          </Link>

          <Link href='/admin/products'>
          <Text
            as={path === '/admin/products' && 'b'}
            cursor='pointer'
          >
            Productos
          </Text>
          </Link>

          <Link href='/admin/categories'>
            <Text
              as={path === '/admin/categories' && 'b'}
              cursor='pointer'
            >
              Categorias
            </Text>
          </Link>

          <Link href='/admin/roles'>
            <Text
              as={path === '/admin/roles' && 'b'}
              cursor='pointer'
            >
              Roles
            </Text>
          </Link>

          <Link href='/admin/users'>
          <Text
            as={path === '/admin/users' && 'b'}
            cursor='pointer'
          >
            Usuarios
          </Text>
          </Link>

        </Flex>

        <Flex
          gap={2}
          alignItems='center'
          justifyContent='flex-end'
        >
          <ThemeSwitcher />
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
