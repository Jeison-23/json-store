import React from 'react'

export const useRoleList = () => {
  const header = [
    { field: 'rol', label: 'Role' },
    { field: 'key', label: 'key' },
    { field: '_id', label: 'id' }
  ]

  return {
    header
  }
}
