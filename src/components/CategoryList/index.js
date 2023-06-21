import React from 'react'
import { Grid } from '@chakra-ui/react'
import { LuAlertTriangle } from 'react-icons/lu'
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
    closeAlert,
    alertDelete,
    actionsAlert,
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
        onClose={closeModal}
        body={
          <CategoryForm
            categorySelected={categorySelected}
            closeModal={closeModal}
            modalForm={modalForm}
            refetch={refetch}
          />
        }
        isOpen={modalForm.isOpen}
      />
      <ComponentAlert
        alertCentered
        title='Eliminar Registro'
        icon={LuAlertTriangle}
        isOpen={alertDelete.isOpen}
        onClose={closeAlert}
        actionsButton={actionsAlert}
        message={`¿Deseas eliminar el registro ${categorySelected?.name}?`}
      />
    </Grid>
  )
}
