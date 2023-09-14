import { useEffect, useState } from 'react'
import { Product } from '@/graphql/products'
import { useLazyQuery } from '@apollo/client'

export const useProductContainerDetail = (productId) => {
  const [showImagesActions, setShowImagesActions] = useState(false)
  const [imagesPos, setImagesPos] = useState(0)
  const [getProducts, { loading, error, data }] = useLazyQuery(Product)

  useEffect(() => {
    getProducts({
      variables: { filter: { _id: productId} },
      fetchPolicy: 'network-only'//'cache-and-network'
    })
  }, [])

  const nextImage = (size) => {
    if ((size - 1) > imagesPos) {
      setImagesPos(state => state + 1)
    }
  }

  const prevImage = () => {
    if (imagesPos > 0) {
      setImagesPos(state => state - 1)
    }
  }
  
  return {
    data: data?.product[0],
    setShowImagesActions,
    showImagesActions,
    prevImage,
    nextImage,
    imagesPos,
    loading,
    error,
  }
}
