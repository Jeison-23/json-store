import { useEffect } from "react"
import { RoleSave } from "@/graphql/role"
import { useMutation } from "@apollo/client"
import { useGeneralFunction } from "./useGeneralFunction"

export const useRoleForm = (props) => {
  const { refetch, closeRoleModal } = props
  const [createRole, { data, loading, error }] = useMutation(RoleSave)
  const { alertToast } = useGeneralFunction()

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
      //console.log('Ha ocurrido un error', e);
    }
  }

  useEffect(() => {
    if (error) {
      alertToast({status: 'error', title: 'Ha ocurrido un error', description: error.message})
      console.log('ha ocurrido un error', error.message)

    } else if (data?.roleSave) {
      refetch({})
      alertToast({title: 'Exitoso', description: 'Se ha guardado el rol sactisfactoriamente'})
      closeRoleModal()
    }

  }, [data, error])

  return {
    initialValues,
    validate,
    loading,
    onSubmit,
  }
}
