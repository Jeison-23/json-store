import React from 'react'
import { Form, Formik } from 'formik'
import { useUserForm } from '@/hooks/useUserForm'
import { UserButtonFile } from '../UserButtonFile'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { Box, Button, Divider, Grid } from '@chakra-ui/react'
import { ComponentSelectFormik } from '@/common/ComponentSelectFormik'

export const UserForm = (props) => {
  const { userSelected } = props
  const {
    file,
    loading,
    setFile,
    validate,
    onSubmit,
    dataRole,
    loadingRole,
    initialValues,
  } = useUserForm(props)

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {() => (
        <Form autoComplete='off'>
          <Grid templateColumns='1fr auto 1fr' gap={2}>
            <Box>
              <Grid gap={4}>
                <Grid gap={2}>
                  <UserButtonFile
                    size='sm'
                    accept="image/*"
                    name='image'
                    state={file}
                    setState={setFile}
                  >
                    Seleccionar Imagen
                  </UserButtonFile>
                </Grid>

                <Grid gap={2}>
                  <ComponentSelectFormik
                    label='Selecciona el rol'
                    data={dataRole?.role}
                    valueField='_id'
                    labelField='rol'
                    required
                    name='roleId'
                  />
                  <ComponetInputFormik
                    label='correo'
                    required
                    name='email'
                  />
                  {!userSelected?._id 
                  && <ComponetInputFormik label='password' required type='password' name='password' />}
                </Grid>
              </Grid>
            </Box>

            <Divider orientation='vertical' />

            <Grid>
              <Grid gap={2}>
                <ComponetInputFormik label='Nombre' required name='firstName' />
                <ComponetInputFormik label='Apellidos' required name='lastName' />
                <ComponetInputFormik label='Tipo documento' required name='typeId' />
                <ComponetInputFormik type='number' label='documento' required name='id' />
                <ComponetInputFormik label='telefono' name='phone' />
              </Grid>

              <Button
                size='sm'
                type='submit'
                isLoading={loading}
                variant='outline'
                colorScheme='teal'
                justifySelf='end'
              >
                Aceptar
              </Button>
            </Grid>

          </Grid>
        </Form>
      )}
    </Formik>
  )
}
