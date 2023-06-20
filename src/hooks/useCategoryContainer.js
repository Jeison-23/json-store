import { useQuery } from '@apollo/client'
import { category } from '@/graphql/category'

export const useCategoryContainer = () => {
  const { loading, error, data, refetch } = useQuery(category, {
    variables: { },
  });
  
  return {
    data,
    error,
    loading,
    refetch
  }
}
