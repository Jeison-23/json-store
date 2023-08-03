import React from 'react'

export const useProductListFilter = ({refreshProducts}) => {
  const initialValues = {
    name: '',
    price: 0,
  }

  const onSubmit = async (values) => {
    await refreshProducts(values)
  
  }

  return {
    initialValues,
    onSubmit
  }
}
