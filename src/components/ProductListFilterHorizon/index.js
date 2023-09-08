import React from 'react'
import { Form, Formik } from 'formik'
import { Button, Grid } from '@chakra-ui/react'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { useProductListFilter } from '@/hooks/useProductListFilter'
import { ComponentSelectFormik } from '@/common/ComponentSelectFormik'

export const ProductListFilterHorizon = ({ dataCategory, refreshProducts }) => {
  const { initialValues, onSubmit } = useProductListFilter({ refreshProducts })

  return (
    <Grid position='relative' h='63px' >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {() => (
          <Form autoComplete='off' autoCapitalize='true' >
            <Grid
              py={1}
              gap={2}
              top='93px'
              zIndex={10}
              bg='gray.800'
              position='fixed'
              w='calc(100vw - 272px)'
              templateColumns='1fr 1fr auto'
            >
              <ComponetInputFormik
                type='text'
                name='name'
                label='Nombre'
              />
              <ComponentSelectFormik
                valueField='_id'
                labelField='name'
                name='categoryId'
                label='Categoria'
                data={dataCategory}
              />
              <Button
                type='Submit'
                alignSelf='end'
                variant='outline'
                colorScheme='purple'
              >
                filtrar
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  )
}
