'use client'

import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'
import { useRoleContainer } from '@/hooks/useRoleContainer'
import { RoleList } from '@/components/RoleList.js'

export const RoleContainer = () => {
  const {
    data,
    error,
    loading,
    refetch,
  } = useRoleContainer()

  const action = [
    {
      label: 'nueva',
      handleAction: () => { },
    },
    {
      label: 'Refrescar',
      handleAction: () => { },
    }
  ]

  console.log(data);

  return (
    <Box m={4}>
      <Grid gap={2}>
        <ComponentPageHeader title='Roles' actions={action} />
        <RoleList data={data?.role} loading={loading} />
      </Grid>
    </Box>
  )
}
