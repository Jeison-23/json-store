import React from 'react'
import { Field } from 'formik'
import { Box, Flex, Grid, Input, Text } from '@chakra-ui/react'

export const ComponetInputFormik = (props) => {
  const {
    name = '',
    label = '',
    size = 'md',
    type = "text",
    labelSize = '',
    required= false,
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
        <Grid gap={1}>
          <Flex gap={1}>
            <Text fontSize={labelSize}>{label}</Text>
            <Text fontSize={labelSize} color='tomato'>{`${required ? '*' : ''}`}</Text>
          </Flex>
          <Input
            {...field}
            type={type}
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
            <Text fontSize='xs' color='tomato' className="error">{meta.error}</Text>
          )}
        </Grid>
      )}
    </Field>
  )
}
