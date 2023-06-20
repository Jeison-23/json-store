import { useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { CategorySave } from '@/graphql/category'

export const useCategoryForm = ({ closeModal, refetch }) => {
  const field_required = "Este campo es requerido"
  const [createCategory, { data, loading, error }] = useMutation(CategorySave)

  useEffect(() => {
    if (error) {
      console.log('ha ocurrido un error', error);
    }
    if (data?.categorySave) {
      refetch({})
      closeModal()
        console.log('creado con exito ', data);
    }
  
  }, [data,error])

  const initialValues = {
    _id: null,
    key: '',
    name: '',
  }

  const validate = (values) => {
    const error = {}

    if (!values.name) error.name = field_required
    if (!values.key) error.key = field_required

    return error
  }

  const onSubmit = async (values) => {
    try {
      delete values.__typename
      const response = await createCategory({ variables: { input: values } })
      console.log('error', error)
      console.log('response =--->',response)

    } catch (e) {
      //console.log('error catch', e);
    }
  }

  return {
    initialValues,
    onSubmit,
    validate,
    loading,
  }
}
