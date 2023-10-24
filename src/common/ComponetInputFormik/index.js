import React from 'react'
import { Field } from 'formik'
import { Box, Flex, Grid, Input, InputGroup, Text, Textarea } from '@chakra-ui/react'

export const ComponetInputFormik = (props) => {
  const {
    name = '',
    label = '',
    size = 'md',
    type = "text",
    fontSize = '',
    labelSize = '',
    required= false,
    placeholder = '',
    isDisabled = false,
    variant = 'outline',
    inputTextAlign = '',
    inputTextTransform = '',
    onChangeInput = () => { },
    ...rest
  } = props

  return (
    <Grid {...rest}>
      <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta }) => (
        <Box>
          <Flex gap={1} mb={2}>
            <Text fontSize={labelSize}>{label}</Text>
            <Text fontSize={labelSize} color='tomato'>{`${required ? '*' : ''}`}</Text>
          </Flex>
          {
            ['text','number', 'password'].includes(type)
              ? <Input
                {...field}
                type={type}
                size={size}
                variant={variant}
                fontSize={fontSize}
                isDisabled={isDisabled}
                placeholder={placeholder}
                textAlign={inputTextAlign}
                textTransform={inputTextTransform}
                onChange={(v) => {
                  field.onChange(v)
                  onChangeInput(v.target.value)
                }}
                isInvalid={meta.touched && meta.error}
              />
              : <Textarea
                {...field}
                size={size}
                onChange={(v) => {
                  field.onChange(v)
                  onChangeInput(v.target.value)
                }}
                isInvalid={meta.touched && meta.error}
              />
          }
          {meta.touched && meta.error && (
            <Text mt={1} fontSize='xs' color='tomato' className="error">{meta.error}</Text>
          )}
        </Box>
      )}
    </Field>
    </Grid>
  )
}
