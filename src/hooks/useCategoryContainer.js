import { useEffect } from 'react'
import { category } from '@/graphql/category'
import { useLazyQuery } from '@apollo/client'

export const useCategoryContainer = () => {
  const [getCategories, { loading, error, data }] = useLazyQuery(category)

  useEffect(() => {
    getCategories()
  }, [])
  
  return {
    data,
    error,
    loading,
    refresh: getCategories
  }
}
