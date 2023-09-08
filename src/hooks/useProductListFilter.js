import { messages } from "@/constants/messages"

export const useProductListFilter = ({refreshProducts}) => {
  const initialValues = {
    name: '',
    price: 0,
    categoryId: '',
    from: 0,
    upTo: 0
  }

  const validate = (values) => {
    const error = {}
    if (values.upTo > 0 && !values.from) error.from = messages['FIELD_REQUIRED']
    if (values.from > 0 && !values.upTo) error.upTo = messages['FIELD_REQUIRED']

    return error
  }

  const onSubmit = async (values) => {
    await refreshProducts(values)
  
  }

  return {
    initialValues,
    validate,
    onSubmit
  }
}
