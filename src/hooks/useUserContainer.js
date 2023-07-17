import { useEffect } from 'react'
import { User } from '@/graphql/user'
import { Role } from "@/graphql/role"
import { useQuery,useLazyQuery } from '@apollo/client'

export const useUserContainer = () => {
  const [getUsers, { loading, error, data }] = useLazyQuery(User)
  const {
    loading: loadingRole,
    error: errorRole,
    data: dataRole
  } = useQuery(Role)

  const refreshUsers = (filter = {}) => {
    getUsers({
      variables: { filter: filter },
      fetchPolicy: 'cache-and-network'
    })
  }

  useEffect(() => {
    refreshUsers()
  }, [])

  return {
    data,
    error,
    loading,
    refreshUsers,
    loadingRole,
    errorRole,
    dataRole,
  }
}
