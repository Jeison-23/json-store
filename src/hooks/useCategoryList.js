import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useMutation } from '@apollo/client'

export const useCategoryList = ({modalForm}) => {
  const alertDelete = useDisclosure()
  const [categorySelected, setCategorySelected] = useState({})

  const [loadingg, setLoadingg] = useState(false)
  //const [createCategory, { data, loading, error }] = useMutation(CategoryDelete)

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
      loading: loadingg,
      label: 'Eliminar',
      colorScheme: 'red',
      variant: 'outline'
    }
  ]

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
