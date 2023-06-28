import React from 'react'
import { Form, Formik } from 'formik'
import { Button, Flex, Grid } from '@chakra-ui/react'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'

export const UserForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  }

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={()=>{}}
    >
      {() => (
        <Form>
          <Grid gap={4}>
            <ComponetInputFormik label='Nombre' required name='firstName' />
            
            <ComponetInputFormik label='Apellidos' required name='lastName' />
            <ComponetInputFormik label='telefono' name='phone' />
            <ComponetInputFormik label='correo' required name='email' />
            <ComponetInputFormik label='password' required type='password' name='password' />
            <Flex justifySelf='end'>
              <Button
                type='submit'
                variant='outline'
                colorScheme='teal'
              >
                Aceptar
              </Button>
            </Flex>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
