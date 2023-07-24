import { useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { messages } from '@/constants/messages'
import { ProductSave } from '@/graphql/products'

export const useAdminProductForm = (props) => {
  const {
    refreshProducts,
    productSelected,
    productForm
  } = props
  const [createProduct, { data, error, loading }] = useMutation(ProductSave)

  const initialValues = {
    _id: productSelected?._id || null,
    name: productSelected?.name || '',
    images: productSelected?.images || [],
    categoryId: productSelected?.category?._id || '',
    description: productSelected?.description || '',
    price: productSelected?.price || 0,
    stock: productSelected?.stock || 0
  }

  const validate = (values) => {
    const error = {}

    if (!values.name) {
      error.name = messages['FIELD_REQUIRED']
    }
    if (!values.categoryId) {
      error.categoriId = messages['FIELD_REQUIRED']
    }
    return error
  }

  const onSubmit = async (values) => {
    try {
      delete values.__typename
      if (typeof values.images[0] === 'string') values.images = null
      await createProduct({ variables: { input: values } })
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (error) {
      console.log('error', error)
    }else if(data?.productSave){
      refreshProducts()
      productForm.onClose()
    }
  }, [data])

  return {
    initialValues,
    validate,
    onSubmit,
    loading,
  }
}
