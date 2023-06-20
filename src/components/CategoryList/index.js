import React, { useState } from 'react'
import { Grid } from '@chakra-ui/react'
import { AiFillEdit } from 'react-icons/ai'
import { CategoryForm } from '../CategoryForm'
import { ComponentModal } from '@/common/ComponentModal'
import { ComponentTable } from '@/common/ComponentTable'
import { useCategoryList } from '@/hooks/useCategoryList'
import { ComponentAlert } from '@/common/ComponentAlert'

export const CategoryList = (props) => {
  const { data, loading, modalForm, refetch } = props
  const {
    header,
    actions,
    closeModal,
    alertDelete,
    categorySelected,
    setCategorySelected
  } = useCategoryList(props)

  return (
    <Grid>
      <ComponentTable
        tableHead={header}
        list={data}
        loading={loading}
        actions={actions}
      />
      <ComponentModal
        title='Categoria'
        isOpen={modalForm.isOpen}
        onClose={closeModal}
        body={
          <CategoryForm
            categorySelected={categorySelected}
            closeModal={closeModal}
            modalForm={modalForm}
            refetch={refetch}
          />
        }
      />
      <ComponentAlert
        title='Eliminar'
        positionButton='end'
        isOpen={alertDelete.isOpen}
        onClose={alertDelete.onClose}
        message={`Deseas eliminar el registro "${categorySelected?.name}" no podras recuperarlo luego`}
      />
    </Grid>
  )
}
