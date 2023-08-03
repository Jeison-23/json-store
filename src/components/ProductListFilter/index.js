import React from 'react'
import { Form, Formik } from 'formik'
import { Button, Flex, Grid, Text } from '@chakra-ui/react'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { useProductListFilter } from '@/hooks/useProductListFilter'
import { ComponentSelectFormik } from '@/common/ComponentSelectFormik'

export const ProductListFilter = ({dataCategory, refreshProducts}) => {
  const { initialValues, onSubmit } = useProductListFilter({refreshProducts})
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Grid gap={2} position='fixed' >
            <Text as='b' fontSize='2xl' >Filtrar productos</Text>
            <ComponetInputFormik
              type='text'
              name='name'
              label='Nombre'
            />
            <ComponetInputFormik
              name='price'
              type='number'
              label='Precio'
            />
            <ComponentSelectFormik
              valueField='_id'
              labelField='name'
              name='categoryId'
              label='Categoria'
              data={dataCategory}
            />
            <Flex gap={2} justifyContent='end'>
              <Button
                size='sm'
                type='reset'
                colorScheme='red'
                onClick={()=>refreshProducts()}
              >
                Limpiar
              </Button>

              <Button
                size='sm'
                type='submit'
                colorScheme='blue'
              >
                Buscar
              </Button>
            </Flex>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
