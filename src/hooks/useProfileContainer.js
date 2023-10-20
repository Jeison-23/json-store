import { useEffect, useState } from 'react'
import { User } from '@/graphql/user'
import { Session } from '@/graphql/session'
import { useRouter } from 'next/navigation'
import { useLazyQuery } from '@apollo/client'
import { useDisclosure } from '@chakra-ui/react'

export const useProfileContainer = ({ token }) => {
  const router = useRouter()
  const modalUserForm = useDisclosure()
  const [redirect, setRedirect] = useState(true)
  const [adminAccess, setAdminAccess] = useState(false)
  const [firstRender, setFirstRender] = useState(true)
  const [userSelected, setUserSelected] = useState({})
  const [localLoading, setLocalLoading] = useState(true)
  const [getSession, { data, loading, error }] = useLazyQuery(Session)
  const [getUser, { data: dataUser, loading: loadingUser, error: errorUser }] = useLazyQuery(User)

  useEffect(() => {
    const localToken = localStorage.getItem('session-token')
    if (!JSON.parse(localToken) || JSON.parse(localToken) !== token) {
      setRedirect(true)
      router.replace('/login')
    } else {
      setRedirect(false)
    }
  }, [])

  const refresh = (filter = {}) => {
    setLocalLoading(true)
    getSession({
      variables: { filter },
      fetchPolicy: 'network-only'
    })
  }

  const refreshGetUser = (filter = { _id: data?.session[0]?.userId}) => {
    if (filter._id) {
      getUser({
        variables: { filter },
        fetchPolicy: 'network-only'
      })
    } else {
      closeSession()
    }
  }

  useEffect(() => refresh({ _id: token }), [])

  useEffect(() => {
    if (!firstRender) {
      refreshGetUser()
    } else {
      setFirstRender(false)
    }

  }, [data])

  useEffect(() => {
    if (!firstRender) {
      setLocalLoading(false)
      if (dataUser?.user[0]) {
        setUserSelected(dataUser?.user[0])
        setAdminAccess(dataUser?.user[0]?.role?.accessKeys?.length > 0)
      }

    }
  }, [dataUser])

  const nameMain = (user = {}) => {
    if (user._id) {
      const lastN = user?.lastName?.split(' ')
      const firstN = user?.firstName?.split(' ')

      return `${firstN[0] || ''} ${lastN[0] || ''}`
    }

    return '----- ------'
  }

  const hiddenId = (user = {}) => {
    if (user._id) {
      let res = user?.id?.toString()
      const hidden = res.slice(-3)

      return hidden.padStart(res.length, '*')
    }

    return '**********'
  }

  const closeSession = () => {
    setLocalLoading(true)
    localStorage.removeItem('session-token')
    router.replace('/login')

  }

  return {
    data: dataUser?.user[0],
    error,
    router,
    refresh,
    loading,
    adminAccess,
    nameMain,
    hiddenId,
    redirect,
    closeSession,
    localLoading,
    userSelected,
    modalUserForm,
    refreshGetUser,
    setUserSelected,
    
  }
}
