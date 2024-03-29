import React from 'react'
import { Grid } from '@chakra-ui/react'
import { LuAlertTriangle } from 'react-icons/lu'
import { AdminProductForm } from '../AdminProductForm'
import { ComponentModal } from '@/common/ComponentModal'
import { ComponentTable } from '@/common/ComponentTable'
import { ComponentAlert } from '@/common/ComponentAlert'
import { useAdminProductList } from '@/hooks/useAdminProductList'
import { ProductList } from '../ProductList'

export const AdminProductList = (props) => {
  const {
    productForm,
    categoryData,
    productData,
    productLoading,
    refreshProducts,
    showPreview,
  } = props

  const {
    header,
    actions,
    productSelected,
    closeProductForm,
    alertProductDelete,
    closeAlertProduct,
    actionsAlert,
  } = useAdminProductList(props)

  return (
    <Grid>
      {showPreview ?
        <ComponentTable
          tableHead={header}
          loading={productLoading}
          list={productData?.product}
          actions={actions}
        />
        :
        <ProductList
          data={productData?.product}
          oading={productLoading}
          noDetail
        />}
      <ComponentModal
        size='2xl'
        title='Crear Producto'
        body={
          <AdminProductForm
            productForm={productForm}
            categoryData={categoryData}
            productSelected={productSelected}
            refreshProducts={refreshProducts}
          />
        }
        isOpen={productForm.isOpen}
        onClose={closeProductForm}
      />
      <ComponentAlert
        alertCentered
        title='Eliminar Registro'
        icon={LuAlertTriangle}
        isOpen={alertProductDelete.isOpen}
        onClose={closeAlertProduct}
        actionsButton={actionsAlert}
        message={`¿Deseas eliminar el registro ${productSelected?.name}?`}
      />
    </Grid>
  )
}