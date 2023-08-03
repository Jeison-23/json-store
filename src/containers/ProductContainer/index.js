'use client'
import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { ProductList } from '@/components/ProductList'
import { useProductContainer } from '@/hooks/useProductContainer'
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
    <Grid m={4} gap={2} templateColumns='auto 1fr'>
      <Box position='relative' minW='220px' >
        <ProductListFilter
          dataCategory={dataCategory?.category}
          refreshProducts={refreshProducts}
          loadingCategory={loadingCategory}
        />
      </Box>
      <ProductList loading={loading} data={data?.product} />
    </Grid>
  )
}
