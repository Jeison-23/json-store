'use client'
import React from 'react'
import { Grid,} from '@chakra-ui/react'
import { DetailProductCard } from '@/components/DetailProductCard'
import { useProductDetailContainer } from '@/hooks/useProductDetailContainer'

export const ProductDetailContainer = ({ productId }) => {
  const {
    data,
    loading,
    prevImage,
    imagesPos,
    nextImage,
    showImagesActions,
    setShowImagesActions
  } = useProductDetailContainer(productId)

  return (
    <Grid m={4} justifyContent='center' >
      {loading ?
        <p>Cargando...</p>
        :
        <DetailProductCard
          setShowImagesActions={setShowImagesActions}
          showImagesActions={showImagesActions}
          prevImage={prevImage}
          nextImage={nextImage}
          imagesPos={imagesPos}
          product={data}
        />
      }
    </Grid>
  )
}
