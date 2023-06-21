import React from 'react'
import { Form, Formik } from 'formik'
import { Button, Grid } from '@chakra-ui/react'
import { useCategoryForm } from '@/hooks/useCategoryForm'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'

export const CategoryForm = (props) => {
  const { categorySelected } = props
  const {
    initialValues,
    onSubmit,
    validate,
    loading,
  } = useCategoryForm(props)

  return (
    <Formik
      initialValues={categorySelected._id ? categorySelected : initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ setFieldValue }) => (
        <Form>
          <Grid gap={4} p={2}>
            <Grid gap={4} templateColumns='1fr 1fr' >
              <ComponetInputFormik
                name="name"
                placeholder="Nombre"
                onChangeInput={(value) => {
                  if (!categorySelected?.key) {
                    setFieldValue('key', value.toLowerCase().replaceAll(' ', '_').replaceAll('-', '_'))
                  }
                }}
              />

              <ComponetInputFormik
                name="key"
                placeholder="key"
                isDisabled={categorySelected?.key}
              />
            </Grid>

            <Button
              size='sm'
              colorScheme='green'
              variant='outline'
              isLoading={loading}
              justifySelf='flex-end'
              type='submit'
            >
              Aceptar
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
