'use client'
import React from 'react'
import { createContext, useState } from 'react' 
export const ShoppingCartContext = createContext()

const ShoppingCartContextProvider = ({children}) => {
  const [productsSelected, setProductsSelected] = useState([])

  const clearCart = () => {
    setProductsSelected([])
  }

  const count = () => productsSelected.length

  const countAll = () => {
    if (count()) {
      return productsSelected.reduce((acc, curr) => acc + curr.quantity, 0)

    } else return count()

  }

  const priceTotal = () => {
    if (count()) {
      const priceTotal = productsSelected.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)
      return priceTotal

    } else return count()
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        count: count(),
        countAll: countAll(),
        priceTotal: priceTotal(),
        clearCart,
        productsSelected,
        setProductsSelected,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider