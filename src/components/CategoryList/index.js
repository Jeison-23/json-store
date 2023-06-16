import { ComponentModal } from '@/common/ComponentModal'
import { ComponentTable } from '@/common/ComponentTable'
import { Grid } from '@chakra-ui/react'
import { AiFillEdit } from 'react-icons/ai';
import React from 'react'

export const CategoryList = ({ data, loading, modalForm }) => {
  const header = [
    { field: 'name', label: 'name' },
    { field: 'key', label: 'key' },
    { field: '_id', label: 'id' }
  ]

  const octions = [
    {
      icon: <AiFillEdit />,
      label: 'Editar',
      handler: ()=> modalForm.onOpen()
    }
  ]

  return (
    <Grid>
      <ComponentTable
        tableHead={header}
        list={data}
        loading={loading}
        actions={octions}
      />
      <ComponentModal
        isOpen={modalForm.isOpen}
        onClose={modalForm.onClose}
      />
    </Grid>
  )
}
