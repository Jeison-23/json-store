import { useEffect } from 'react'
import { category } from '@/graphql/category'
import { useLazyQuery, useQuery } from '@apollo/client'

export const useCategoryContainer = () => {
  //const [getCategories, { loading, error, data }] = useLazyQuery(category)
  const { loading, error, data, refetch } = useQuery(category, {
    variables: { },
  });

  useEffect(() => {
   // getCategories()
  }, [])
  
  return {
    data,
    error,
    loading,
    refetch
  }
}
