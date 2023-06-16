import { ComponentModal } from '@/common/ComponentModal'
import { ComponentTable } from '@/common/ComponentTable'
import { Grid } from '@chakra-ui/react'
import React from 'react'

export const CategoryList = ({ data, loading, modalForm }) => {
  const header = [
    { field: 'name', label: 'name' },
    { field: 'key', label: 'key' },
    { field: '_id', label: 'id' }
  ]

  return (
    <Grid>
      <ComponentTable
        tableHead={header}
        list={data}
        loading={loading}
      />
      <ComponentModal
        isOpen={modalForm.isOpen}
        onClose={modalForm.onClose}
      />
    </Grid>
  )
}
