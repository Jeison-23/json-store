import { useEffect } from 'react'
import { User } from '@/graphql/user'
import { useLazyQuery } from '@apollo/client'

export const useUserContainer = () => {
  const [getUsers, { loading, error, data }] = useLazyQuery(User)

  const refreshUsers = (filter = {}) => {
    getUsers({ variables: { filter: filter } })
  }

  useEffect(() => {
    refreshUsers()
  }, [])

  return {
    data,
    error,
    loading,
    refreshUsers
  }
}
