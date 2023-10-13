'use client'
import React from 'react'
import { Form, Formik } from 'formik'
import { Box, Grid } from '@chakra-ui/react'
import { ProductList } from '@/components/ProductList'
import { useProductContainer } from '@/hooks/useProductContainer'
import { ProductListFilter } from '@/components/ProductListFilter'
import { useProductListFilter } from '@/hooks/useProductListFilter'
import { ProductListFilterHorizon } from '@/components/ProductListFilterHorizon'

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

  const { initialValues, validate, onSubmit } = useProductListFilter({ refreshProducts })

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Grid m={4} gap={2} templateColumns='auto 1fr'>
            <Box position='relative' minW='220px' >
              <ProductListFilter
                dataCategory={dataCategory?.category}
                refreshProducts={refreshProducts}
                loadingCategory={loadingCategory}
              />
            </Box>
            <Grid gap={2} >
              <ProductListFilterHorizon
                dataCategory={dataCategory?.category}
                refreshProducts={refreshProducts}
              />
              <ProductList addCart loading={loading} data={data?.product} />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
