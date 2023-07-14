import React from 'react'
import { Box, Divider, Grid, Image, Text } from '@chakra-ui/react'
import { ComponentModal } from '@/common/ComponentModal'
import { UserForm } from '../UserForm'
import { CardUser } from '../CardUser'

export const UserList = (props) => {
  const {
    data,
    loading,
    refreshUsers,
    modalUserForm
  } = props

  return (
    <Grid gap={2} templateColumns='auto auto auto'>
      {
        !loading
          ? data?.user.length
            ? data?.user.map((user, i) => (
              <CardUser user={user} key={i} />
            ))
            : 'no data'
          : 'cargando'
      }

      <ComponentModal
        size='4xl'
        title='Crear usuario'
        isOpen={modalUserForm.isOpen}
        onClose={modalUserForm.onClose}
        body={(
          <UserForm
            refreshUsers={refreshUsers}
            modalUserForm={modalUserForm}
          />
        )}
      />
    </Grid>
  )
}
