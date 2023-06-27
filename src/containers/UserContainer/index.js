'use client'

import React from 'react'
import { Grid } from '@chakra-ui/react'
import { UserList } from '@/components/UserList'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'

export const UserContainer = () => {

  return (
    <Grid m={4} gap={2}>
      <ComponentPageHeader title='Usuarios' />
      <UserList />
    </Grid>
  )
}
