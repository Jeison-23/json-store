import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { Session } from '@/graphql/session'
import { useLazyQuery } from '@apollo/client'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { SessionContext } from '@/context/SessionContext'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Box, Flex, Grid, Icon, Image, Text } from '@chakra-ui/react'

export const NavbarAdminLayout = ({ children, path }) => {
  const router = useRouter()
  const { avatar } = useContext(SessionContext)
  const [token, setToken] = useState('')
  const [accessKeys, setAccessKeys] = useState([])
  const [getSession, { data, loading, error }] = useLazyQuery(Session)

  const getAccess = (tok) => {
    getSession({
      variables: { filter: { _id: tok } },
      fetchPolicy: 'network-only'
    })
  }

  useEffect(() => {
    const localToken = localStorage.getItem('session-token')
    if (JSON.parse(localToken)) {
      setToken(JSON.parse(localToken))
      !accessKeys?.length && getAccess(JSON.parse(localToken))

    } else router.replace('/login')
    
  }, [path])

  useEffect(() => {
    if (data?.session) {
      setAccessKeys(data?.session[0]?.role?.accessKeys)
    }

  }, [data])

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
          {accessKeys?.includes('administración') &&
            <Link href='/admin/posts'>
              <Text
                as={path === '/admin/posts' && 'b'}
                cursor='pointer'
              >
                Administración
              </Text>
            </Link>}

          {accessKeys?.includes('productos') &&
            <Link href='/admin/products'>
              <Text
                as={path === '/admin/products' && 'b'}
                cursor='pointer'
              >
                Productos
              </Text>
            </Link>}

          {accessKeys?.includes('categorias') &&
            <Link href='/admin/categories'>
              <Text
                as={path === '/admin/categories' && 'b'}
                cursor='pointer'
              >
                Categorias
              </Text>
            </Link>}

          {accessKeys?.includes('roles') &&
            <Link href='/admin/roles'>
              <Text
                as={path === '/admin/roles' && 'b'}
                cursor='pointer'
              >
                Roles
              </Text>
            </Link>}

          {accessKeys?.includes('usuarios') &&
            <Link href='/admin/users'>
              <Text
                as={path === '/admin/users' && 'b'}
                cursor='pointer'
              >
                Usuarios
              </Text>
            </Link>}

        </Flex>

        <Flex
          gap={4}
          alignItems='center'
          justifyContent='flex-end'
        >
          <ThemeSwitcher />
          <Link href={`/admin/profile/${token}`}>
            {!avatar ?
              <Icon
                boxSize={6}
                as={FaUser}
                borderWidth={1}
                borderRadius='100%'
                bg={path === `/admin/profile/${token}` && '#CC6BEE'}
              />
              : <Image src={avatar} borderRadius={100} h='30px' w='30px' />
            }
          </Link>
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
