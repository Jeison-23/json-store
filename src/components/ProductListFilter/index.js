import React from 'react'
import { Box, Button, Flex, Grid, Text, useColorModeValue } from '@chakra-ui/react'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'

export const ProductListFilter = ({ refreshProducts }) => {
  const bg = useColorModeValue('WhiteAlpha.200','gray.800')
  return (
    <Grid p={1} position='fixed' bg={bg} h='100vh' zIndex={10} >
      <Box>
        <Grid gap={2}>
        <Text as='b' fontSize='2xl' >Filtrar productos</Text>
        <ComponetInputFormik
          name='price'
          type='number'
          label='Precio'
        />
        <Text>Rango de Precio:</Text>
        <ComponetInputFormik
          name='from'
          type='number'
        />
        <ComponetInputFormik
          name='upTo'
          type='number'
        />
        <Flex gap={2} justifyContent='space-between'>
          <Button
            size='xs'
            type='reset'
            variant='outline'
            colorScheme='orange'
            onClick={() => refreshProducts()}
          >
            Limpiar
          </Button>

          <Button
            size='xs'
            type='submit'
            variant='outline'
            colorScheme='purple'
          >
            Buscar
          </Button>
        </Flex>
        </Grid>
      </Box>
    </Grid>
  )
}
