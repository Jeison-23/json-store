import React from 'react'
import { Grid, useColorModeValue } from '@chakra-ui/react'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { ComponentSelectFormik } from '@/common/ComponentSelectFormik'

export const ProductListFilterHorizon = ({ dataCategory, refreshProducts }) => {
  const bg = useColorModeValue('#FFFFFF','gray.800')

  return (
    <Grid position='relative' h='65px' >
      <Grid
        py={1}
        gap={2}
        top='93px'
        zIndex={10}
        bg={bg}
        position='fixed'
        w='calc(100vw - 260px)'
        templateColumns={{lg:'1fr 1fr', sm: '1fr'}}
      >
        <ComponetInputFormik
          type='text'
          name='name'
          label='Nombre'
        />
        <ComponentSelectFormik
          valueField='_id'
          labelField='name'
          name='categoryId'
          label='Categoria'
          data={dataCategory}
        />
        
      </Grid>
    </Grid>
  )
}
