import React from 'react'
import { Form, Formik } from 'formik'
import { SelectCard } from '../SelectCard'
import { useRoleForm } from '@/hooks/useRoleForm'
import { accessAdmin } from '@/constants/accessKeys'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'

export const RoleForm = (props) => {
  const { roleSelected } = props
  const { initialValues, validate, loading, onSubmit } = useRoleForm(props)

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
              <GridItem colSpan={2} >
                <SelectCard name='accessKeys' data={accessAdmin} label='Selecciona los accesos para este rol' />
              </GridItem>
            </Grid>
            
            <Button
              size='sm'
              type='submit'
              variant='outline'
              colorScheme='green'
              isLoading={loading}
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
