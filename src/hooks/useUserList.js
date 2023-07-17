import { UserDelete } from '@/graphql/user'
import { useMutation } from '@apollo/client'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'

export const useUserList = ({modalUserForm,refreshUsers}) => {
  const alertUserDelete = useDisclosure()
  const [userSelected, setUserSelected] = useState({})

  const [deleteUser, { loading, data, error }] = useMutation(UserDelete)

  const actionCard = [
    {
      icon: BiEdit,
      label: 'Editar',
      action: (user) => openModal(user)
    },
    {
      icon: RiDeleteBin6Line,
      label: 'Eliminar',
      action: (user) => openUserAlert(user)
    },
  ]

  const openModal = (value) => {
    setUserSelected(value)
    modalUserForm.onOpen()
  }

  const closeModal = () => {
    setUserSelected({})
    modalUserForm.onClose()
  }

  const openUserAlert = (values) => {
    setUserSelected(values)
    alertUserDelete.onOpen()
  }

  const closeUserAlert = () => {
    setUserSelected({})
    alertUserDelete.onClose()
  }

  const actionsUserAlert = [
    {
      size: 'sm',
      label: 'cancelar',
      colorScheme: 'blue',
      variant: 'outline',
      action: closeUserAlert,
    },
    {
      size: 'sm',
      loading: loading,
      label: 'Eliminar',
      colorScheme: 'red',
      variant: 'outline',
      action: () => deleteUser({ variables: { id: userSelected?._id } })
    }
  ]

  useEffect(() => {
    if (error) {
      console.log('ha ocurrido un error', error)
    } else if (data?.userDelete) {
      refreshUsers()
      closeUserAlert()
    }
  }, [data, error])
  
  return {
    actionCard,
    openModal,
    closeModal,
    userSelected,
    setUserSelected,
    closeUserAlert,
    alertUserDelete,
    actionsUserAlert,
  }
}
