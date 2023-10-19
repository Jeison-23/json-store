'use client'
import React from 'react'
import { useProfileContainer } from '@/hooks/useProfileContainer'
import { Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { ComponentModal } from '@/common/ComponentModal'
import { UserForm } from '@/components/UserForm'

export const ProfileContainer = (props) => {
  const { data, error, loading, refresh, userSelected, setUserSelected, modalUserForm, refreshGetUser } = useProfileContainer(props)

  return (
    <Grid my={4} >
      {/* <Text>Este es el token: {token}</Text> */}
      <Flex justifySelf='center' gap={2} h='500px' w='95%' >
        <Grid py={2} justifyContent='center' w='50%' >
          <Image
            h='300px'
            w='300px'
            src={data?.image}
            borderRadius='100%'
          />
        </Grid>
        <Grid
          gap={2}
          w='100%'
          templateRows='auto 1fr'
        >
          <Flex
            p={4}
            justifyContent='space-between'
            borderBottom='1px solid #E2E8F0'
          >
            <Text as='b' fontSize='2xl' >{data?.firstName} {data?.lastName}</Text>
            <Button borderRadius={0} onClick={modalUserForm.onOpen} >Editar</Button>
          </Flex>

          <Grid p='0.25rem 0.70rem' gap={2} templateColumns='1fr 1fr' >
            <Text alignSelf='center' as='b' fontSize='xl'>Correo: </Text>
            <Text alignSelf='center'>{data?.email || '----------'}</Text>

            <Text alignSelf='center' as='b' fontSize='xl'>Telefono: </Text>
            <Text alignSelf='center'>{data?.phone || '----------'}</Text>

            <Text alignSelf='center' as='b' fontSize='xl'>Dirección: </Text>
            <Text alignSelf='center'>{data?.direccion || '----------'}</Text>

            <Text alignSelf='center' as='b' fontSize='xl'>Nombre completo: </Text>
            <Text alignSelf='center'>{data?.firstName} {data?.lastName || '----------'}</Text>

            <Text alignSelf='center' as='b' fontSize='xl'>Tipo y documento:</Text>
            <Text alignSelf='center' textTransform='capitalize'> {data?.typeId} {data?.id || '----------'}</Text>
          </Grid>
        </Grid>
      </Flex>

      <ComponentModal
        size='4xl'
        title='Crear usuario'
        isOpen={modalUserForm.isOpen}
        onClose={modalUserForm.onClose}
        body={(
          <UserForm
            noRole
            closeModal={modalUserForm.onClose}
            userSelected={userSelected}
            refreshUsers={refreshGetUser}
            modalUserForm={modalUserForm}
            //loadingRole={loadingRole}
            //errorRole={errorRole}
            //dataRole={dataRole}
          />
        )}
      />
    </Grid>
  )
}
