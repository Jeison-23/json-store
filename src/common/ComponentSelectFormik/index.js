import React, { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import { HandleClickOutside } from '../HandleClickOutside'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Box, Flex, Grid, Icon, Text, useColorModeValue } from '@chakra-ui/react'

export const ComponentSelectFormik = (props) => {
  const { values, setFieldValue } = useFormikContext()
  const bgList = useColorModeValue('#F7FAFC', '#262B36')

  const {
    name,
    label,
    labelSize = '',
    required = false,
    data = [],
    loading = false,
    labelField = 'label',
    valueField = 'value',
    ...rest
  } = props

  const [firstRender, setFirstRender] = useState(true)
  const [showList, setShowList] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const isSelected = (selected, item) => selected[valueField] === item[valueField]

  const select = (value) => {
    if (itemSelected[valueField]) {
      if (value[valueField] === itemSelected[valueField]) setItemSelected({})
      else setItemSelected(value)

    } else setItemSelected(value)
    setShowList(false)
  }

  useEffect(() => {
    if (name) {
      if (values[name]) {
        const found = data.find(item => item[valueField] === values[name])
        if (found) setItemSelected(found)

      } else setItemSelected({})

    } else console.log('debes darle un nombre al componente')

  }, [values])

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    } else {
      if (itemSelected[valueField]) setFieldValue(name, itemSelected[valueField])
    }

  }, [itemSelected])

  return (
    <HandleClickOutside click={() => setShowList(false)}>
      <Grid gap={2} position='relative' {...rest}>
        <Flex gap={1}>
          <Text fontSize={labelSize}>{label}</Text>
          <Text fontSize={labelSize} color='tomato'>{`${required ? '*' : ''}`}</Text>
        </Flex>

        <Grid
          px={4}
          h='40px'
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          alignItems='center'
          templateColumns='1fr auto'
          onClick={() => {
            !loading && setShowList((state) => !state)
          }}
        >
          <Text noOfLines={1} >
            {itemSelected[labelField]}
          </Text>
          <Icon as={showList ? FiChevronUp : FiChevronDown} />
        </Grid>

        {showList
          ? (
            <Grid
              position='absolute'
              zIndex='10'
              gap={1}
              top='75px'
              width='95%'
              left='2.5%'
              p={1}
              bg={bgList}
            >
              {data.length
                ? data.map((item, i) => (
                  <Box
                    px={4}
                    key={i}
                    cursor='pointer'
                    bg={isSelected(itemSelected, item) ? '#1E90FF' : ''}
                    color={isSelected(itemSelected, item) && '#FFFFFF'}
                    _hover={{ bg: '#1E90FF', color: '#FFFFFF' }}
                    onClick={() => select(item)}
                  >
                    {item[labelField]}
                  </Box>
                ))
                : undefined
              }
            </Grid>
          ) : undefined}
      </Grid>
    </HandleClickOutside>
  )
}
