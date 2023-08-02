'use client'
import { useEffect } from 'react';
import { Product } from '@/graphql/products';
import { useLazyQuery, useQuery } from '@apollo/client';
import { category } from '@/graphql/category';


export const useProductContainer = () => {
  const [getProducts, { loading, error, data }] = useLazyQuery(Product)

  const refreshProducts = (filter = {}) => {
    getProducts({
      variables: { filter: filter },
      fetchPolicy: 'network-only'//'cache-and-network'
    })
  }

  const { loading: loadingCategory, error: errorCategory, data: dataCategory, refetch } = useQuery(category, );

  useEffect(() => {
    refreshProducts()
  }, [])
  
  return {
    data,
    error,
    loading,
    dataCategory,
    errorCategory,
    loadingCategory,
    refreshProducts
  }
}
