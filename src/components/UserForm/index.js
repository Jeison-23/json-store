import React from 'react'
import { Form, Formik } from 'formik'
import { useUserForm } from '@/hooks/useUserForm'
import { UserButtonFile } from '../UserButtonFile'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { Box, Button, Divider, Grid, GridItem } from '@chakra-ui/react'

export const UserForm = () => {
  const {
    file,
    setFile,
    initialValues,
    validate,
    onSubmit,
  } = useUserForm()

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({values}) => (
        <Form autoComplete='off'>
          <Grid templateColumns='1fr auto 1fr' gap={2}>
            <Box>
              <Grid gap={4}>
               <Grid gap={2}>
               <UserButtonFile size='sm' accept="image/*" name='image' state={file} setState={setFile}>Seleccionar Imagen</UserButtonFile>
                
               </Grid>
               <Grid gap={2}>
                <ComponetInputFormik label='correo' required name='email' />
                <ComponetInputFormik label='password' required type='password' name='password' />
                </Grid>
              </Grid>
            </Box>

            <Divider orientation='vertical' />

            <Box>
              <Grid gap={2}>
                <ComponetInputFormik label='Nombre' required name='firstName' />
                <ComponetInputFormik label='Apellidos' required name='lastName' />
                <ComponetInputFormik label='Tipo documento' required name='typeId' />
                <ComponetInputFormik label='documento' required name='id' />
                <ComponetInputFormik label='telefono' name='phone' />
              </Grid>
            </Box>

            <GridItem colSpan={3} >
              <Button
                size='sm'
                type='submit'
                variant='outline'
                colorScheme='teal'
                justifySelf='end'
              >
                Aceptar
              </Button>
            </GridItem>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
