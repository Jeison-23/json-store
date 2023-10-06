'use client'
import React, { useContext, useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { PayList } from '@/components/PayList'
import { PayInvoice } from '@/components/PayInvoice'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'

export const PayPageContainer = () => {
  const router = useRouter()
  const { count } = useContext(ShoppingCartContext)

  useEffect(() => {
    if (count < 1) {
      router.replace('/products')
    }
  }, [count])


  return (
    <Grid p={4} gap={2} h='100%' templateColumns='2fr 1fr'>
      <PayList />
      <PayInvoice />
    </Grid>
  )
}
