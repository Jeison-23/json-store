import React from 'react'
import { useToast } from "@chakra-ui/react"

export const useGeneralFunction = () => {
  const toast = useToast()

  const alertToast = (parameters) => {
    const {
      title = '',
      description = '',
      status = 'success',
      duration = 3000
    } = parameters

    toast({
      title: title,
      description: description,
      status: status,
      duration: duration,
      isClosable: true,
    })
  }

  const createArray = (size = 0) => {
    const array = []
    for (let i = 0; i < size; i++) {
      array.push(i)
    }
    return array
  }

  const validateEmail = (chain) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(chain);
  }

  return {
    alertToast,
    createArray,
    validateEmail,
  }
}
