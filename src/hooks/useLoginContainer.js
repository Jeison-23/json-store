import { useContext, useEffect, useState } from "react"
import { Login } from "@/graphql/login"
import { useRouter } from "next/navigation"
import { useLazyQuery } from "@apollo/client"
import { messages } from "@/constants/messages"
import { useGeneralFunction } from "./useGeneralFunction"
import { SessionContext } from "@/context/SessionContext"

export const useLoginContainer = () => {
  const router = useRouter()
  const { newToken } = useContext(SessionContext)
  const { validateEmail, alertToast } = useGeneralFunction()
  const [localLoading, setLocalLoading] = useState(false)
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
    setLocalLoading(true)
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
        setLocalLoading(false)
        alertToast({ title: 'Error', description: 'Usuario o contraseña no valido', status: 'error', position: 'top' })
        console.log(error.message)

      } else if (data?.login) {
        alertToast({ title: 'Correcto', description: 'Hola, bienvenido has ingresado de manera correcta!', status: 'success', position: 'top' })
        newToken(data.login)
        localStorage.setItem('session-token', JSON.stringify(data.login))
        router.replace(`/profile/${data.login}`)

      }
    }
  }, [data, error])

  return {
    loading,
    onSubmit,
    validate,
    localLoading,
    showPassword,
    initialValues,
    setShowPassword,
  }
}
