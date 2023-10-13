import React from 'react'
import Link from 'next/link'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { ComponentDrawer } from '@/common/ComponentDrawer'
import { ShopingCartProducts } from '@/components/ShopingCartProducts'
import { AiOutlineAppstoreAdd, AiOutlineShoppingCart } from 'react-icons/ai'
import { Box, Flex, Grid, Icon, Text, useDisclosure } from '@chakra-ui/react'
import { ShopingcartProductsCount } from '@/components/ShopingcartProductsCount'
import { ShopingCartProductsFooter } from '@/components/ShopingCartProductsFooter'

export const NavbarMainLayout = ({ path, children }) => {
  const shopingCartDrawer = useDisclosure()

  return (
    <Box>
      <Grid
        p={4}
        gap={4}
        bg='#000000'
        color='#FFFFFF'
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
              textShadow={path === '/home-page' && '0px 0px 8px #CC6BEE, 0px 0px 8px #CC6BEE '}
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
          <Link href='/products'>
            <Text
              cursor='pointer'
              as={path === '/products' && 'b'}
              alignSelf='end'
              textShadow={path === '/products' && '0px 0px 8px #CC6BEE, 0px 0px 8px #CC6BEE '}
            >
              Productos
            </Text>
          </Link>
        </Flex>

        <Flex
          gap={4}
          alignItems='center'
          justifyContent='flex-end'
        >
          <ThemeSwitcher />
          <Flex position='relative'>
            <ShopingcartProductsCount />
            <Icon
              boxSize={5}
              color='#FFF'
              cursor='pointer'
              onClick={shopingCartDrawer.onOpen}
              as={AiOutlineShoppingCart}
            />
          </Flex>
          <Link href='/login'>
            <Text
              as={path === '/login' && 'b'}
              textShadow={path === '/login' && '0px 0px 8px #CC6BEE'}
              cursor='pointer'
            >
              login
            </Text>
          </Link>
        </Flex>
      </Grid>

      <Box
        overflowY='auto'
        overflowX='hidden'
        h='calc(100vh - 93px)'
      >
        {children}
        <ComponentDrawer
          size='md'
          title='Carrito de compras'
          isOpen={shopingCartDrawer.isOpen}
          onClose={shopingCartDrawer.onClose}
          body={<ShopingCartProducts shopingCartDrawer={shopingCartDrawer} />}
          footer={ <ShopingCartProductsFooter shopingCartDrawer={shopingCartDrawer} /> }
        />
      </Box>
    </Box>
  )
}