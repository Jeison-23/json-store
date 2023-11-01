'use client'
import React from 'react'
import { Grid } from '@chakra-ui/react'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'

export const InvoiceContainer = () => {
  return (
    <Grid m={4} gap={2} >
      <ComponentPageHeader title='Facturas' />
    </Grid>
  )
}
