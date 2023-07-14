import { useEffect, useState } from "react"
import { UserSave } from "@/graphql/user"
import { useMutation, useQuery } from "@apollo/client"
import { messages } from "@/constants/messages"
import { Role } from "@/graphql/role"

export const useUserForm = ({modalUserForm}) => {

  const {
    loading: loadingRole,
    error: errorRole,
    data: dataRole,
  } = useQuery(Role)

  const [createUser, { data, loading, error }] = useMutation(UserSave, {
    context: {
      headers: {
        "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
        "apollo-require-preflight": true 
      }
    }
  })
  const [file, setFile] = useState([])

  const initialValues = {
    _id: null,
    roleId: '',
    firstName: '',
    lastName: '',
    password: '',
    typeId: '',
    image: [],
    phone: '',
    email: '',
    id: ''
  }

  const validate = (values) => {
    const error = {}
    if (!values.firstName) error.firstName = messages['FIELD_REQUIRED']
    if (!values.lastName) error.lastName = messages['FIELD_REQUIRED']
    if (!values.password) error.password = messages['FIELD_REQUIRED']
    if (!values.email) error.email = messages['FIELD_REQUIRED']
    if (!values.image.length) error.image = messages['FIELD_REQUIRED']
    if (!values.typeId) error.typeId = messages['FIELD_REQUIRED']
    if (!values.roleId) error.roleId = messages['FIELD_REQUIRED']
    if (!values.id) error.id = messages['FIELD_REQUIRED']

    return error
  } 

  const onSubmit = async (values) => {
    console.log('values',values)
    try {
      delete values.__typename
      await createUser({ variables: { input: values } })

    } catch (e) {
      console.log('error catch submit form', e);
    }
  }

  useEffect(() => {
    if (error) {
      console.log('ha ocurrido un error', error)
    } else if (data?.userSave) {
      console.log('se creo un usuario');
      modalUserForm.onClose()
    }

  }, [data, error])
  
  return {
    file,
    setFile,
    initialValues,
    dataRole,
    loadingRole,
    validate,
    onSubmit
  }
}
