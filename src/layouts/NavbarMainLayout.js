import React from 'react'
import Link from 'next/link'
import { AiOutlineAppstoreAdd, AiOutlineShoppingCart } from 'react-icons/ai'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Box, Button, Flex, Grid, Icon, Text, useDisclosure } from '@chakra-ui/react'
import { ComponentDrawer } from '@/common/ComponentDrawer'

export const NavbarMainLayout = ({ path, children }) => {
  const shopCar = useDisclosure()

  return (
    <Box>
      <Grid
        p={4}
        gap={4}
        bg='#000000'
        color='#E3E0FB'
        templateColumns='auto 1fr 1fr'
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
              as={path === '/products' && 'b'}
              alignSelf='end'
              textTransform={path === '/products' && 'uppercase'}
              // fontSize={path === '/products' && 'lg'}
              textShadow={path === '/products' && '0px 0px 8px #CC6BEE, 0px 0px 8px #CC6BEE '}
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
          <Button size='sm' onClick={shopCar.onOpen} leftIcon={<AiOutlineShoppingCart />} variant='outline' >
            Carrito
          </Button>
          <Link href='/login'>
            <Text
              as={path === '/login' && 'b'}
              textShadow={path === '/login' && '0px 0px 8px #CC6BEE'}
              textTransform={path === '/login' && 'uppercase'}
              cursor='pointer'
            >
              login
            </Text>
          </Link>
        </Flex>
      </Grid>

      <Box
        overflowX='hidden' overflowY='auto' h='calc(100vh - 93px)'
      >
        {children}
        <ComponentDrawer title='Carrito de compras' isOpen={shopCar.isOpen} onClose={shopCar.onClose} />
      </Box>
    </Box>
  )
}