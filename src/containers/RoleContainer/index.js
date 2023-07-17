'use client'

import React from 'react'
import { RoleList } from '@/components/RoleList.js'
import { Box, Grid, useDisclosure } from '@chakra-ui/react'
import { useRoleContainer } from '@/hooks/useRoleContainer'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'

export const RoleContainer = () => {
  const {
    data,
    error,
    loading,
    refetch,
  } = useRoleContainer()

  const modalRoleForm = useDisclosure()

  const action = [
    /*{
      label: 'nueva',
      handleAction: modalRoleForm.onOpen,
    },*/
    {
      label: 'Refrescar',
      handleAction: () => refetch({}),
    }
  ]

  return (
    <Box m={4}>
      <Grid gap={2}>
        <ComponentPageHeader title='Roles' actions={action} />
        <RoleList data={data?.role} loading={loading} modalRoleForm={modalRoleForm} refetch={refetch} />
      </Grid>
    </Box>
  )
}
