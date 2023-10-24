'use client'
import React, { useEffect } from 'react'
import { createContext, useState } from 'react' 
export const ShoppingCartContext = createContext()

const ShoppingCartContextProvider = ({children}) => {
  const [productsSelected, setProductsSelected] = useState([])

  const clearCart = () => {
    setProductsSelected([])
  }

  const count = () => productsSelected.length

  const countAll = () => {
    if (count()) return productsSelected.reduce((acc, curr) => acc + curr.quantity, 0)

    else return count()

  }

  const priceTotal = () => {
    if (count()) {
      const priceTotal = productsSelected.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)
      return priceTotal

    } else return count()
  }

  const findProduct = (productId) => {
    let found = productsSelected.filter(product => product._id === productId )
    return found.length > 0
    
  }

  const addProduct = (product) => {
    setProductsSelected(state => state.concat(product))
  }

  const removeProduct = (productId) => {
    const updateArray = productsSelected.filter(product =>  product._id !== productId)
    setProductsSelected(updateArray)

  }

  useEffect(() => {
    const shoppingCartStorage = localStorage.getItem('shoppingCart')
    if (shoppingCartStorage?.length) {
      setProductsSelected(JSON.parse(shoppingCartStorage))
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('shoppingCart',JSON.stringify(productsSelected))
    
  }, [productsSelected])
  
  return (
    <ShoppingCartContext.Provider
      value={{
        count: count(),
        countAll: countAll(),
        priceTotal: priceTotal(),
        clearCart,
        addProduct,
        findProduct,
        removeProduct,
        productsSelected,
        setProductsSelected,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider