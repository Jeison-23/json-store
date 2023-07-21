import { useEffect } from 'react'

export const useAdminProductList = () => {

  const header = [
    { field: 'name', label: 'Nombre' },
    { field: 'description', label: 'Descripción' },
    { field: 'price', label: 'Precio' },
    { field: 'stock', label: 'Stock' },
  ]

  return {
    header
  }
}
