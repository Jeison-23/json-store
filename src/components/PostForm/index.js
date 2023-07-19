import React from 'react'
import { Form, Formik } from 'formik'
import { Button, Grid } from '@chakra-ui/react'
import { usePostForm } from '@/hooks/usePostForm'
import { ButtonImageFile } from '../ButtonImageFile'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { ComponentSelectFormik } from '@/common/ComponentSelectFormik'

export const PostForm = (props) => {
  const { initialValues, dataSelect, onSubmit, loading } = usePostForm(props)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    > 
      {() => (
        <Form>
          <Grid gap={2}>
            <ComponentSelectFormik name='type' data={dataSelect} label='Tipo' required />
            <ComponetInputFormik name='title' label='Titulo' required />
            <ButtonImageFile
              size='sm'
              accept="image/*"
              multiple
              name='images'
            >
              Imagenes
            </ButtonImageFile>
 
            <ComponetInputFormik name='description' label='Descripción' required />
            
            <Button
              size='sm'
              type='submit'
              variant='outline'
              justifySelf='end'
              colorScheme='teal'
              isLoading={loading}
            >
              Aceptar
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
