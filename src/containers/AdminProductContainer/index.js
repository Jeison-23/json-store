'use client'
import React from 'react'
import { Grid } from '@chakra-ui/react'
import { AdminProductList } from '@/components/AdminProductList'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'
import { useAdminProductContainer } from '@/hooks/useAdminProductContainer'

export const AdminProductContainer = () => {
  const {
    action,
    productForm,
    categoryData,
    categoryLoading,
    refreshProducts,
    productData,
    productLoading,
    setshowPreview,
  } = useAdminProductContainer()

  return (
    <Grid m={4} gap={2} >
      <ComponentPageHeader title='Productos' actions={action}/>
      <AdminProductList
        refreshProducts={refreshProducts}
        productData={productData}
        productLoading={productLoading}
        productForm={productForm}
        categoryData={categoryData}
        setshowPreview={setshowPreview}
      />
    </Grid>
  )
}