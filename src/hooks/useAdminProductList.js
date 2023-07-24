import { ProductDelete } from '@/graphql/products'
import { useMutation } from '@apollo/client'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useGeneralFunction } from './useGeneralFunction'

export const useAdminProductList = ({productForm, refreshProducts}) => {
  const alertProductDelete = useDisclosure()
  const [productSelected, setProductSelected] = useState({})
  const { alertToast } = useGeneralFunction()
  const [deleteProduct, { loading, data, error }] = useMutation(ProductDelete)

  const header = [
    { field: 'name', label: 'Nombre' },
    { field: 'description', label: 'Descripción' },
    { field: 'price', label: 'Precio' },
    { field: 'stock', label: 'Stock' },
  ]

  const actions = [
    {
      icon: <AiFillEdit />,
      label: 'Editar',
      handler: (row) => {
        setProductSelected(row)
        productForm.onOpen()
      }
    },
    {
      icon: <AiFillDelete />,
      label: 'Eliminar',
      handler: (row) => {
        setProductSelected(row)
        alertProductDelete.onOpen()
      }
    }
  ]

  const closeProductForm = () => {
    setProductSelected({})
    productForm.onClose()
  }

  const closeAlertProduct = () => {
    setProductSelected({})
    alertProductDelete.onClose()
  }

  const actionsAlert = [
    {
      size: 'sm',
      loading: loading,
      label: 'cancelar',
      colorScheme: 'blue',
      variant: 'outline',
      action: closeAlertProduct,
    },
    {
      size: 'sm',
      loading: loading,
      label: 'Eliminar',
      colorScheme: 'red',
      variant: 'outline',
      action: () => deleteProduct({ variables: { ids: [productSelected?._id] } })
    }
  ]

  useEffect(() => {
    if (error) {
      alertToast({status: 'error', title: 'Error', description: error.message})
      //console.log('ha ocurrido un error', error);
    } else if (data?.productDelete) {
      refreshProducts()
      alertToast({title: 'Exitoso', description:'Se ha eliminado correctamente'})
      closeAlertProduct()
    }
  }, [data, error])

  return {
    header,
    actions,
    productSelected,
    closeProductForm,
    alertProductDelete,
    closeAlertProduct,
    actionsAlert,
  }
}
