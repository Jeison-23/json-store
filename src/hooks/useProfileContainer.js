import { useEffect, useState } from 'react'
import { User } from '@/graphql/user'
import { Session } from '@/graphql/session'
import { useLazyQuery } from '@apollo/client'
import { useDisclosure } from '@chakra-ui/react'

export const useProfileContainer = ({ token }) => {
  const modalUserForm = useDisclosure()
  const [firstRender, setFirstRender] = useState(true)
  const [userSelected, setUserSelected] = useState({})
  const [getSession, { data, loading, error }] = useLazyQuery(Session)
  const [getUser, { data: dataUser, error: errorUser }] = useLazyQuery(User)

  const refresh = (filter = {}) => {
    getSession({
      variables: { filter },
      fetchPolicy: 'network-only'
    })
  }

  const refreshGetUser = (filter = {_id: data?.session[0]?.userId}) => {
    getUser({
      variables: { filter },
      fetchPolicy: 'network-only'
    })
  }

  useEffect(() => {
    refresh({_id: token})
    
  }, [])

  useEffect(() => {
    if (!firstRender) {
      refreshGetUser()
    } else {
      setFirstRender(false)
    }

  },[data])

  useEffect(() => {
    if (!firstRender) {
      if (dataUser?.user[0]) {
        setUserSelected(dataUser?.user[0])
      }

    }
  }, [dataUser])
  

  return {
    data: dataUser?.user[0],
    error,
    refresh,
    loading,
    userSelected,
    modalUserForm,
    refreshGetUser,
    setUserSelected,
  }
}
