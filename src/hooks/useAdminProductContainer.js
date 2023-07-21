import { useEffect } from 'react'
import { Product } from '@/graphql/products'
import { category } from '@/graphql/category'
import { useLazyQuery } from '@apollo/client'
import { useDisclosure, useQuery } from '@chakra-ui/react'

export const useAdminProductContainer = () => {
  const productForm = useDisclosure()
  const [getProducts, { data: productData, loading: productLoading, error: productError }] = useLazyQuery(Product)

  const refreshProducts = (filter = {}) => {
    getProducts({
      variables: { filter: filter },
      fetchPolicy: 'cache-and-network'
    })
  }

  const action = [
    {
      label: 'Nuevo',
      handleAction: () => productForm.onOpen(),
    },
    {
      label: 'Refrescar',
      handleAction: () => refreshProducts(),
    }
  ]

  const {
    data: categoryData,
    loading: categoryLoading,
  } = useQuery(category, { variables: {} })

  useEffect(() => {
    refreshProducts()
  }, [])
  

  return {
    action,
    productForm,
    categoryData,
    categoryLoading,
    refreshProducts,
    productData,
    productLoading,
  }
}
