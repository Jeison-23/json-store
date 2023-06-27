import React from 'react'
import { Form, Formik } from 'formik'
import { Button, Grid } from '@chakra-ui/react'
import { useRoleForm } from '@/hooks/useRoleForm'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'

export const RoleForm = (props) => {
  const { roleSelected } = props
  const { initialValues, validate, onSubmit } = useRoleForm(props)

  return (
    <Formik
      initialValues={ roleSelected?._id ? roleSelected : initialValues  }
      validate={validate}
      onSubmit={onSubmit}
    >
      {({setFieldValue}) => (
        <Form autoComplete='off'>
          <Grid gap={2}>
            <Grid gap={4} templateColumns='1fr 1fr'>
              <ComponetInputFormik
                name='rol'
                label="Rol"
                required
                onChangeInput={(value) => {
                  if (!roleSelected?.key) {
                  setFieldValue('key', value.toLowerCase().replaceAll(' ', '_').replaceAll('-', '_'))
                  }
                }}
              />
              <ComponetInputFormik
                name='key'
                label='Key'
                required
                isDisabled={roleSelected?.key}
              />
            </Grid>
            <Button
              type='submit'
              variant='outline'
              colorScheme='green'
              justifySelf='flex-end'
              
            >
              Aceptar
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
