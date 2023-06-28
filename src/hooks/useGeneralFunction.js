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

  return {
    alertToast
  }
}
