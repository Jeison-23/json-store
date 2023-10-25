import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { Box, Flex, Grid, Icon, Image, Text, Tooltip, useColorModeValue } from '@chakra-ui/react'

export const PayFormCard = (props) => {
  const bgCard = useColorModeValue('purple.700', '#736AAF')
  const {
    loading = false,
    isDisabled = false,
    cardNumber = () => { },
    setFieldValue = () => { }
  } = props

  return (
    <Grid gap={2} justifySelf='center'>
      <Tooltip
        hasArrow
        label='Ingresa tu numero de tarjeta y codigo de verificación para efectuar el pago'
      >
        <Box
          h='20px'
          bg='white'
          borderRadius={100}
          justifySelf='flex-start'
        >
          <Icon
            w='20px'
            h='20px'
            cursor='help'
            color='blue.300'
            as={FaInfoCircle}
          />
        </Box>
      </Tooltip>

      <Grid
        w='520px'
        h='280px'
        bg={bgCard}
        borderRadius='lg'
        color='white'
        templateRows='1fr 1fr'
      >
        <Flex w='100%' justifyContent='space-between'>
          <Grid px={7} w='50%' >
            <Image
              h='100px'
              alignSelf='center'
              src='/images/chip-card.png'
            />
          </Grid>

          <Grid px={7} w='50%'>
            <Text as='b' justifySelf='end' alignSelf='center' >JSON STORE</Text>
          </Grid>
        </Flex>

        <Flex px={7} justifyContent='space-between'  >
          <ComponetInputFormik
            w='50%'
            type='text'
            fontSize={20}
            name='cardNumber'
            variant='flushed'
            alignSelf='center'
            isDisabled={loading || isDisabled}
            placeholder='0123 4567 8901 2345'
            onChangeInput={v => cardNumber(v, 'cardNumber', setFieldValue)}
          />

          <ComponetInputFormik
            w='25%'
            name='cvv'
            type='text'
            variant='flushed'
            placeholder='000'
            alignSelf='center'
            inputTextAlign='center'
            isDisabled={loading || isDisabled}
          />
        </Flex>
      </Grid>
    </Grid>
  )
}
