import { useEffect, useState } from "react"
import { UserSave } from "@/graphql/user"
import { useMutation, useQuery } from "@apollo/client"
import { messages } from "@/constants/messages"
import { Role } from "@/graphql/role"

export const useUserForm = (props) => {
  const {
    modalUserForm,
    refreshUsers,
    userSelected,
    closeModal
  } = props

  const {
    loading: loadingRole,
    error: errorRole,
    data: dataRole,
  } = useQuery(Role)

  const [createUser, { data, loading, error }] = useMutation(UserSave)
  const [file, setFile] = useState([])

  const initialValues = {
    _id: userSelected?._id || null,
    roleId: userSelected?.role?._id || '',
    firstName: userSelected?.firstName || '',
    lastName: userSelected?.lastName || '',
    password: '',
    typeId: userSelected?.typeId || '',
    image: userSelected?.image || [],
    phone: userSelected?.phone || '',
    email: userSelected?.email || '',
    id: userSelected?.id || ''
  }

  const validate = (values) => {
    const error = {}
    if (!values.firstName) error.firstName = messages['FIELD_REQUIRED']
    if (!values.lastName) error.lastName = messages['FIELD_REQUIRED']
    if (!userSelected?._id) {
      if (!values.password) error.password = messages['FIELD_REQUIRED']
    }
    if (!values.email) error.email = messages['FIELD_REQUIRED']
    if (!userSelected?.img) {
      if (!values.image.length) error.image = messages['FIELD_REQUIRED']
    }
    if (!values.typeId) error.typeId = messages['FIELD_REQUIRED']
    if (!values.roleId) error.roleId = messages['FIELD_REQUIRED']
    if (!values.id) error.id = messages['FIELD_REQUIRED']

    return error
  } 

  const onSubmit = async (values) => {
    console.log('values',values)
    try {
      delete values.__typename
      if(!values.password) delete values.password
      if (typeof values.image === 'string') values.image = null

      await createUser({ variables: { input: values } })

    } catch (e) {
      console.log('error catch submit form', e);
    }
  }

  useEffect(() => {
    if (error) {
      console.log('ha ocurrido un error', error)
    } else if (data?.userSave) {
      refreshUsers()
      closeModal()
    }

  }, [data, error])
  
  return {
    file,
    loading,
    setFile,
    validate,
    onSubmit,
    dataRole,
    loadingRole,
    initialValues,
  }
}
