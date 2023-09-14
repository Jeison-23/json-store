import React from 'react'
import { ProductContainerDetail } from '@/containers/ProductContainerDetail'

const Product = ({params}) => {
  return (
    <ProductContainerDetail productId={params.id} />
  )
}

export default Product