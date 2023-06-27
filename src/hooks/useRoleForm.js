import { useEffect } from "react"
import { RoleSave } from "@/graphql/role"
import { useMutation } from "@apollo/client"

export const useRoleForm = (props) => {
  const { refetch, closeRoleModal } = props
  const [createRole, { data, loading, error }] = useMutation(RoleSave)

  const initialValues = {
    _id: null,
    rol: '',
    key: ''
  }

  const validate = (values) => {
    const error = {}

    if (!values.rol) error.rol = 'Este campo es requerido'
    if (!values.key) error.key = 'Este campo es requerido'
    
    return error
  }

  const onSubmit = async (values) => {
    try {
      delete values.__typename
      await createRole({ variables: { input: values } })

    } catch (e) {
      console.log('Ha ocurrido un error', e);
    }
  }

  useEffect(() => {
    if (error) {
      console.log('ha ocurrido un error', error)
    } else if (data?.roleSave) {
      refetch({})
      closeRoleModal()
    }

  }, [data, error])

  return {
    initialValues,
    validate,
    onSubmit,
  }
}
