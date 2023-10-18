import { useEffect, useState } from "react"
import { messages } from "@/constants/messages"
import { useGeneralFunction } from "./useGeneralFunction"
import { useLazyQuery } from "@apollo/client"
import { Login } from "@/graphql/login"

export const useLoginContainer = () => {
  const { validateEmail, alertToast } = useGeneralFunction()
  const [firstRender, setFirstRender] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const [login, { data, loading, error }] = useLazyQuery(Login)

  const validateLogin = (input) => {
    login({
      variables: { input },
      fetchPolicy: 'network-only'//'cache-and-network'
    })
  }

  const initialValues = {
    email: '',
    password: ''
  }

  const validate = (values) => {
    const error = {}
    if (!values.email) error.email = messages['FIELD_REQUIRED']
    else if (!validateEmail(values.email)) error.email = messages['EMAIL_INCORRECT']
    if (!values.password) error.password = messages['FIELD_REQUIRED']

    return error
  }

  const onSubmit = async (values) => {
    try {
      await validateLogin(values)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    } else {
      if (error) {
        alertToast({ title: 'Error', description: 'Usuario o contraseña no valido', status: 'error', position: 'top' })
        console.log(error.message);
      } else if (data.login) {
        localStorage.setItem('session-token', JSON.stringify(data.login))
      }
    }
  }, [data, error])

  return {
    loading,
    onSubmit,
    validate,
    showPassword,
    initialValues,
    setShowPassword,
  }
}
