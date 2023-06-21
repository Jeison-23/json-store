import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useDisclosure } from '@chakra-ui/react'
import { CategoryDelete } from '@/graphql/category'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

export const useCategoryList = ({modalForm, refetch}) => {
  const alertDelete = useDisclosure()
  const [categorySelected, setCategorySelected] = useState({})
  const [deleteCategory, { data, loading, error }] = useMutation(CategoryDelete)

  const header = [
    { field: 'name', label: 'name' },
    { field: 'key', label: 'key' },
    { field: '_id', label: 'id' }
  ]

  const actions = [
    {
      icon: <AiFillEdit />,
      label: 'Editar',
      handler: (row)=> {
        setCategorySelected(row)
        modalForm.onOpen()
      }
    },
    {
      icon: <AiFillDelete />,
      label: 'Eliminar',
      handler: (row)=> {
        setCategorySelected(row)
        alertDelete.onOpen()
      }
    }
  ]

  const closeModal = () => {
    setCategorySelected({})
    modalForm.onClose()
  }

  const closeAlert = () => {
    setCategorySelected({})
    alertDelete.onClose()
  }

  const actionsAlert = [
    {
      size: 'sm',
      label: 'cancelar',
      colorScheme: 'blue',
      variant: 'outline',
      action: closeAlert,
    },
    {
      size: 'sm',
      loading: loading,
      label: 'Eliminar',
      colorScheme: 'red',
      variant: 'outline',
      action: () => deleteCategory({ variables: { id: categorySelected?._id } })
    }
  ]

  useEffect(() => {
    if (error) {
      console.log('ha ocurrido un error', error);
    } else if (data?.categoryDelete) {
      refetch({})
      closeAlert({})
    }
  }, [data, error])

  return {
    header,
    actions,
    closeModal,
    closeAlert,
    alertDelete,
    actionsAlert,
    categorySelected,
    setCategorySelected
  }
}
