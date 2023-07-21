import React from 'react'
import { Grid } from '@chakra-ui/react'
import { ComponentModal } from '@/common/ComponentModal'
import { AdminProductForm } from '../AdminProductForm'
import { ComponentTable } from '@/common/ComponentTable'
import { useAdminProductList } from '@/hooks/useAdminProductList'

export const AdminProductList = (props) => {
  const {
    productForm,
    categoryData,
    productData,
    productLoading,
    refreshProducts,
  } = props

  const { header } = useAdminProductList()

  return (
    <Grid>
      <ComponentTable
        tableHead={header}
        loading={productLoading}
        list={productData?.product}
      />
      <ComponentModal
        size='2xl'
        title='Crear Producto'
        body={
          <AdminProductForm productForm={productForm} categoryData={categoryData} refreshProducts={refreshProducts} />
        }
        isOpen={productForm.isOpen}
        onClose={productForm.onClose}
      />
    </Grid>
  )
}
