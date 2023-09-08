
export const useProductListFilter = ({refreshProducts}) => {
  const initialValues = {
    name: '',
    price: 0,
    categoryId: ''
  }

  const onSubmit = async (values) => {
    await refreshProducts(values)
  
  }

  return {
    initialValues,
    onSubmit
  }
}
