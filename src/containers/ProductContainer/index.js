'use client'
import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { useProductContainer } from '@/hooks/useProductContainer'
import { ProductList } from '@/components/ProductList'
import { ProductListFilter } from '@/components/ProductListFilter'

export const ProductContainer = () => {
  const {
    data,
    error,
    loading,
    dataCategory,
    errorCategory,
    loadingCategory,
    refreshProducts
  } = useProductContainer()

  return (
    <Grid m={4} gap={2} templateColumns='auto auto'>
      <Box minW='210px'>
        <Box position='relative' >
        <ProductListFilter dataCategory={dataCategory?.category} loadingCategory={loadingCategory} />
        </Box>
       </Box>
      <ProductList data={data?.product} loading={loading} />
    </Grid>
  )
}
