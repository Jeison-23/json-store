'use client'
import React from 'react'
import { Grid,} from '@chakra-ui/react'
import { DetailProductCard } from '@/components/DetailProductCard'
import { useProductContainerDetail } from '@/hooks/useProductContainerDetail'

export const ProductContainerDetail = ({ productId }) => {
  const {
    data,
    loading,
    prevImage,
    imagesPos,
    nextImage,
    showImagesActions,
    setShowImagesActions
  } = useProductContainerDetail(productId)

  return (
    <Grid m={4} justifyContent='center' >
      {loading ?
        <p>Cargando...</p>
        :
        <DetailProductCard
          setShowImagesActions={setShowImagesActions}
          showImagesActions={showImagesActions}
          data={data} prevImage={prevImage}
          nextImage={nextImage}
          imagesPos={imagesPos}
        />
      }
    </Grid>
  )
}
