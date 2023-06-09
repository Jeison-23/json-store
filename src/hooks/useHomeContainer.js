'use client'
import { useEffect } from 'react';
import { Product } from '@/graphql/products';
import { useLazyQuery } from '@apollo/client';


export const useHomeContainer = () => {
  const [getProducts, { loading, error, data }] = useLazyQuery(Product)

  useEffect(() => {
    getProducts()
  }, [])
  
  return {
    data,
    error,
    loading,
    refresh: getProducts
  }
}
