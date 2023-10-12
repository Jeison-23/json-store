import React from 'react'
import { Form, Formik } from 'formik'
import { ButtonImageFile } from '../ButtonImageFile'
import { Button, Flex, Grid } from '@chakra-ui/react'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { ComponentSelectFormik } from '@/common/ComponentSelectFormik'
import { useAdminProductForm } from '@/hooks/useAdminProductForm'

export const AdminProductForm = (props) => {
  const {
    refreshProducts,
    productSelected,
    productForm,
    categoryData
  } = props

  const {
    initialValues,
    validate,
    onSubmit,
    loading,
  } = useAdminProductForm(props)

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Grid gap={2}>
            <ComponetInputFormik
              name='name'
              label='nombre'
              required
            />
            <ButtonImageFile
              name='images'
              accept="image/*"
              multiple
              editar={productSelected?._id}
            >
              Producto
            </ButtonImageFile>

            <ComponentSelectFormik
              name='categoryId'
              label='Categoria'
              labelField='name'
              valueField='_id'
              data={categoryData?.category}
              required
            />

            <ComponetInputFormik
              type='textarea'
              name='description'
              label='Descripción'
            />
            <Grid gap={2} templateColumns='1fr 1fr' >
              <ComponetInputFormik
                type='number'
                name='price'
                label='precio'
                required
              />
              <ComponetInputFormik
                type='number'
                name='stock'
                label='stock'
                required
              />
            </Grid>
            <Flex gap={2} justifySelf='flex-end'>
              <Button
                type='reset'
                size='sm'
                colorScheme='red'
                variant='outline'
                isLoading={loading}
                onClick={() => productForm.onClose()}
              >
                Cancelar
              </Button>
              <Button isLoading={loading} type='submit' size='sm' colorScheme='green' variant='outline'>
                Aceptar
              </Button>
            </Flex>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
