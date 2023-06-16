import { CategorySave } from '@/graphql/category';
import { useMutation } from '@apollo/client'

export const useCategoryForm = (modalForm) => {
  const field_required = "Este campo es requerido"
  const [createCategory, { data, loading, error }] = useMutation(CategorySave)

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
    console.log(values);
    try {
      const response = await createCategory( {variables: { inputd: values }})
      if (!loading) {
        if (error) {
          console.log('error', error);
        } else {
          modalForm.onClose()
          console.log('creado con exito ', data);
        }
      }
      console.log(response);
    } catch (e) {
      console.log('error catch',e);
    }
  }

  return {
    initialValues,
    onSubmit,
    validate,
    loading,
  }
}
