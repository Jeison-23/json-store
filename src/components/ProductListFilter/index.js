import React from 'react'
import { Form, Formik } from 'formik'
import { Button, Flex, Grid, Text } from '@chakra-ui/react'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { ComponentSelectFormik } from '@/common/ComponentSelectFormik'

export const ProductListFilter = ({dataCategory}) => {
  return (
    <Formik
      initialValues={{
        name: '',
        price: '',
        categoryId: ''
      }}
    >
      {() => (
        <Form>
          <Grid gap={2} position='fixed' >
            <Text as='b' fontSize='2xl' >Filtrar productos</Text>
            <ComponetInputFormik type='text' label='Nombre' name='name' />
            <ComponetInputFormik type='number' label='Precio' name='price' />
            <ComponentSelectFormik label='Categoria' data={dataCategory} valueField='_id' labelField='name' name='categoryId' />

            <Flex gap={2} justifyContent='end'>
              <Button
                size='sm'
                type='reset'
                colorScheme='red'
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
