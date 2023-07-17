import React, { useState } from 'react'

export const useUserList = ({modalUserForm}) => {
  const [userSelected, setUserSelected] = useState({})
  const actionCard = [
    {
      icon: '',
      label: 'Editar',
      action: (user) => openModal(user)
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

  return {
    actionCard,
    openModal,
    closeModal,
    userSelected,
    setUserSelected,
  }
}
