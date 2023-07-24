import { useEffect } from 'react'
import { Product } from '@/graphql/products'
import { category } from '@/graphql/category'
import { useLazyQuery } from '@apollo/client'
import { useDisclosure } from '@chakra-ui/react'

export const useAdminProductContainer = () => {
  const productForm = useDisclosure()
  const [getProducts, { data: productData, loading: productLoading, error: productError }] = useLazyQuery(Product)

  const refreshProducts = (filter = {}) => {
    getProducts({
      variables: { filter: filter },
      fetchPolicy: 'network-only'//'cache-and-network'
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

  const [getCategory, { data: categoryData, loading: categoryLoading}] = useLazyQuery(category, { variables: {}})

  useEffect(() => {
    refreshProducts()
    getCategory({})
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
