import { useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

export const useCategoryList = ({modalForm}) => {
  const alertDelete = useDisclosure()
  const [categorySelected, setCategorySelected] = useState({})

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

  return {
    header,
    actions,
    closeModal,
    alertDelete,
    categorySelected,
    setCategorySelected
  }
}
