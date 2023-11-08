
import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { ProductReport } from '@/graphql/productReport'

export const useAdminHomeContainer = () => {
  const date = new Date()
  const [getProducts, { data, loading, error }] = useLazyQuery(ProductReport)

  const refreshProducts = (filter = {}) => {
    getProducts({
      variables: { filter: filter },
      fetchPolicy: 'network-only'//'cache-and-network'
    })
  }

  useEffect(() => {
    refreshProducts({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      dayMonth: date.getDate(),
    }
    )
  }, [])
  

  return {
    refreshProducts,
    data: data?.productReport,
    loading,
    error
  }
}
