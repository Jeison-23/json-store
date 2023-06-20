import React from 'react'
import { Field } from 'formik'
import { Box, Grid, Input } from '@chakra-ui/react'

export const ComponetInputFormik = (props) => {
  const {
    name = '',
    size = 'md',
    variant = 'outline',
    placeholder = '',
    isDisabled = false,
    onChangeInput = () => { },
  } = props

  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta }) => (
        <Grid>
          <Input
            {...field}
            type="text"
            size={size}
            variant={variant}
            isDisabled={isDisabled}
            placeholder={placeholder}
            onChange={(v) => {
              field.onChange(v)
              onChangeInput(v.target.value)
            }}
            isInvalid={meta.touched && meta.error}
          />
          {meta.touched && meta.error && (
            <Box color='tomato' className="error">{meta.error}</Box>
          )}
        </Grid>
      )}
    </Field>
  )
}
