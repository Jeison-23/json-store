import React, { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

const ShoppingCartContextProvider = ({children}) => {
  const [productsSelected, setProductsSelected] = useState([])

  return (
    <ShoppingCartContext.Provider
      value={{
        productsSelected,
        setProductsSelected,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider