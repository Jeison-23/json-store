import React from 'react'
import { ProductDetailContainer } from '@/containers/ProductDetailContainer'

const Product = ({params}) => {
  return (
    <ProductDetailContainer productId={params.id} />
  )
}

export default Product