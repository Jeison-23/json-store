import React from 'react'
import { Box, Divider, Grid, Image, Text } from '@chakra-ui/react'
import { ComponentModal } from '@/common/ComponentModal'
import { UserForm } from '../UserForm'
import { CardUser } from '../CardUser'

export const UserList = ({modalUserForm}) => {

  return (
    <Grid gap={2} templateColumns='1fr auto 1fr'>
      <Grid p={1} gap={2} borderWidth={1} borderRadius={10} templateColumns='1fr auto 1fr'>
        <Image justifySelf='center' w='200px' h='130px' src='https://m.media-amazon.com/images/I/61DpzbmqsWL.jpg' />
        <Divider orientation='vertical' />
        <Box>
          <Text>Nombre: mclovin</Text>
          <Text>phone: 109-323-435</Text>
          <Text>email: emailnofake@hotmail.com</Text>
        </Box>
      </Grid>

      <CardUser />

      <ComponentModal
        size='4xl'
        title='Crear usuario'
        isOpen={modalUserForm.isOpen}
        onClose={modalUserForm.onClose}
        body={<UserForm />}
      />
    </Grid>
  )
}
