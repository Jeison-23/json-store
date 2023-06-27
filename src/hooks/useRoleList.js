import React, { useEffect, useState } from 'react'
import { RoleDelete } from '@/graphql/role'
import { useMutation } from '@apollo/client'
import { useDisclosure } from '@chakra-ui/react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

export const useRoleList = (props) => {
  const { modalRoleForm, refetch } = props
  const alertRolDelete = useDisclosure()
  const [roleSelected, setRoleSelected] = useState({})
  const [deleteRole, { data, loading, error }] = useMutation(RoleDelete)

  const header = [
    { field: 'rol', label: 'Role' },
    { field: 'key', label: 'key' },
    { field: '_id', label: 'id' }
  ]

  const actions = [
    {
      icon: <AiFillEdit />,
      label: 'Editar',
      handler: (row) => {
        setRoleSelected(row)
        modalRoleForm.onOpen()
      }
    },
    {
      icon: <AiFillDelete />,
      label: 'Eliminar',
      handler: (row) => {
        setRoleSelected(row)
        alertRolDelete.onOpen()
      }
    }
  ]

  const closeRoleModal = () => {
    setRoleSelected({})
    modalRoleForm.onClose()
  }

  const closeRoleAlert = () => {
    setRoleSelected({})
    alertRolDelete.onClose()
  }

  const actionsAlert = [
    {
      size: 'sm',
      label: 'cancelar',
      colorScheme: 'blue',
      variant: 'outline',
      action: closeRoleAlert,
    },
    {
      size: 'sm',
      loading: loading,
      label: 'Eliminar',
      colorScheme: 'red',
      variant: 'outline',
      action: () => deleteRole({ variables: { id: roleSelected?._id } })
    }
  ]

  useEffect(() => {
    if (error) {
      console.log('ha ocurrido un error', error);
    } else if (data?.roleDelete) {
      refetch({})
      closeRoleAlert({})
    }
  }, [data, error])

  return {
    header,
    actions,
    roleSelected,
    actionsAlert,
    closeRoleAlert,
    closeRoleModal,
    alertRolDelete,
    setRoleSelected,
  }
}
