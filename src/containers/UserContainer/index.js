'use client'

import React from 'react'
import { Grid, useDisclosure } from '@chakra-ui/react'
import { UserList } from '@/components/UserList'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'
import { useUserContainer } from '@/hooks/useUserContainer'

export const UserContainer = () => {
  const {
    data,
    error,
    loading,
    refreshUsers
  } = useUserContainer()

  const modalUserForm = useDisclosure()

  const actions = [
    {
      label: 'Nuevo',
      handleAction: () => modalUserForm.onOpen()
    },
    {
      label: 'Refrescar',
      handleAction: () => refreshUsers()
    }
  ]

  return (
    <Grid m={4} gap={2}>
      <ComponentPageHeader actions={actions} title='Usuarios' />
      <UserList data={data} loading={loading} refreshUsers={refreshUsers} modalUserForm={modalUserForm} />
    </Grid>
  )
}
