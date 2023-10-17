import React, { useEffect, useState } from 'react'
import { Grid, Text } from '@chakra-ui/react'
import { useFormikContext } from 'formik'

export const SelectCard = (props) => {
  const { values, setFieldValue } = useFormikContext()
  const {
    name,
    label,
    data = [],
    labelField = 'label',
    valueField = 'value',
  } = props

  const [optionSelected, setOptionSelected] = useState([])

  const handleOption = (value) => {
    let handle = [...optionSelected]

    if (handle.includes(value)) {
      handle = handle.filter(ele => ele !== value)
    } else {
      handle.push(value)
    }
    setOptionSelected(handle)
    setFieldValue(name, handle)
  }

  useEffect(() => {
    if (name) {
      setOptionSelected(values[name])
    }
  }, [])

  return (
    <Grid gap={2}>
      <Text>{label}</Text>
      <Grid gap={2} templateColumns='1fr 1fr 1fr'>
      {data.length ?
        data.map((data, i) => (
          <Grid
            key={i}
            cursor='pointer'
            borderWidth= '1px'
            justifyItems='center'
            _hover={{
              //p: '1px',
              color: '#ffffff',
              //borderWidth: '0',
              filter: 'brightness(80%)',
            }}
            _active={{
              p: '1px',
              bg: 'blue.300',
              color: '#FFFFFF',
              borderWidth: '0',
            }}
            onClick={() => handleOption(data[valueField])}
            bg={optionSelected?.includes(data[valueField]) && 'blue.400'}
            color={optionSelected?.includes(data[valueField]) && 'white'}
          >
            {data[labelField] || '...'}
          </Grid>
        ))
        : 'Sin datos'
      }
    </Grid>
    </Grid>
  )
}
