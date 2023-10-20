'use client'
import React from 'react'
import { Loader } from './loader'
import { UserForm } from '@/components/UserForm'
import { ComponentModal } from '@/common/ComponentModal'
import { useProfileContainer } from '@/hooks/useProfileContainer'
import { Button, Flex, Grid, Image, Text } from '@chakra-ui/react'

export const ProfileContainer = (props) => {
  const { isAdmin = false } = props
  const {
    data,
    error,
    router,
    adminAccess,
    nameMain,
    hiddenId,
    redirect,
    closeSession,
    localLoading,
    userSelected,
    modalUserForm,
    refreshGetUser
  } = useProfileContainer(props)

  return (
    !redirect ?
    !localLoading ?
      <Grid my={4} >
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
              <Text as='b' fontSize='2xl' >{nameMain(data)}</Text>
              <Flex gap={2}>
                <Button  borderRadius={0} onClick={()=> closeSession()} colorScheme='red' > logout </Button>
                <Button borderRadius={0} onClick={modalUserForm.onOpen} >Editar</Button>
                {adminAccess && <Button borderRadius={0} onClick={()=> router.replace(isAdmin ? '/home-page' :'/admin/home') } > {isAdmin ? 'User' : 'Admin'} </Button>}
              </Flex>
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
              <Text alignSelf='center' textTransform='capitalize'> {data?.typeId} {hiddenId(data) || '----------'}</Text>
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
      : <Loader />
      : undefined
  )
}
