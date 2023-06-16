import React from 'react'
import { Form, Formik } from 'formik'
import { Button, Grid } from '@chakra-ui/react'
import { useCategoryForm } from '@/hooks/useCategoryForm'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'

export const CategoryForm = ({modalForm}) => {
  const {
    initialValues,
    onSubmit,
    validate,
    loading,
  } = useCategoryForm(modalForm)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ setFieldValue }) => (
        <Form>
          <Grid gap={2} p={2}>
            <ComponetInputFormik
              name="name"
              placeholder="Nombre"
              onChangeInput={(value) => {
                setFieldValue('key', value.toLowerCase().replaceAll(' ','_').replaceAll('-','_'))
              }}
            />
            <ComponetInputFormik name="key" placeholder="key"/>
            
            <Button isLoading={loading} justifySelf='flex-end' size='sm' type='submit'>
              Aceptar
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
