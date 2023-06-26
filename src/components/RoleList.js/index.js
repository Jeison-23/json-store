import React from 'react'
import { Grid } from '@chakra-ui/react'
import { useRoleList } from '@/hooks/useRoleList'
import { ComponentTable } from '@/common/ComponentTable'

export const RoleList = ({data,loading}) => {
  const { header } = useRoleList()
  return (
    <Grid>
      <ComponentTable
        list={data}
        loading={loading}
        tableHead={header}
      />
    </Grid>
  )
}
