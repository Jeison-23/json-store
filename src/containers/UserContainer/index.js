'use client'

import React from 'react'
import { Grid, useDisclosure } from '@chakra-ui/react'
import { UserList } from '@/components/UserList'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'

export const UserContainer = () => {

  const modalUserForm = useDisclosure()

  const actions = [
    {
      label: 'Nuevo',
      handleAction: () => modalUserForm.onOpen()
    },
  ]

  return (
    <Grid m={4} gap={2}>
      <ComponentPageHeader actions={actions} title='Usuarios' />
      <UserList modalUserForm={modalUserForm} />
    </Grid>
  )
}
