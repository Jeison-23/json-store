import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { ComponentModal } from '@/common/ComponentModal'
import { UserForm } from '../UserForm'
import { CardUser } from '../CardUser'
import { useUserList } from '@/hooks/useUserList'

export const UserList = (props) => {
  const {
    data,
    loading,
    refreshUsers,
    modalUserForm
  } = props

  const {
    actionCard,
    closeModal,
    userSelected
  } = useUserList({ modalUserForm })

  return (
    <Box>
      <Grid gap={2} templateColumns='1fr 1fr 1fr'>
        {
          !loading
            ? data?.user.length
              ? data?.user.map((user, i) => (
                <CardUser user={user} key={i} options={actionCard} />
              ))
              : 'no data'
            : 'cargando'
        }
      </Grid>

      <ComponentModal
        size='4xl'
        title='Crear usuario'
        isOpen={modalUserForm.isOpen}
        onClose={closeModal}
        body={(
          <UserForm
            closeModal={closeModal}
            userSelected={userSelected}
            refreshUsers={refreshUsers}
            modalUserForm={modalUserForm}
          />
        )}
      />
    </Box>
  )
}
