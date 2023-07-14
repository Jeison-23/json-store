import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { HandleClickOutside } from '../HandleClickOutside'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useFormikContext } from 'formik'

const array = [
  {
    label: 'item 1',
    value: 1,
  },
  {
    label: 'item 2',
    value: 2,
  },
  {
    label: 'item 3',
    value: 3,
  },
  {
    label: 'item 4',
    value: 4,
  }
]

export const ComponentSelectFormik = (props) => {
  const { values, setFieldValue } = useFormikContext()

  const bgInput = useColorModeValue('#EDF2F7','#2D3748') // #262B36 dark #EDF2F7 Ligth
  const bgList = useColorModeValue('#F7FAFC','#262B36')

  const {
    name,
    label,
    labelSize = '',
    required = false,
    data = [],
    loading = false,
    labelField = 'label',
    valueField = 'value',
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
      }
    } else {
      console.log('debes darle un nombre al componente');
    }
    
  }, [])

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    } else {
      if (itemSelected[valueField]) setFieldValue(name,itemSelected[valueField])
    }

  }, [itemSelected])

  return (
    <HandleClickOutside click={() => setShowList(false)}>
      <Grid gap={2} position='relative'>
        <Flex gap={1}>
          <Text fontSize={labelSize}>{label}</Text>
          <Text fontSize={labelSize} color='tomato'>{`${required ? '*' : ''}`}</Text>
        </Flex>
  
        <Grid
          px={4}
          //bg={bgInput}
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
              zIndex='100'
              gap={1}
              top='74px'
              minW='400px'
              left='9px'
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
