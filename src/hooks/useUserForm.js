import { validationMenssage as m } from "@/constants/validationMenssage"
import { useState } from "react"


export const useUserForm = () => {
  const [file, setFile] = useState([])

  const initialValues = {
    _id: null,
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

    if (!values.firstName) error.firstName = m['this_Field_Is_Required']
    if (!values.lastName) error.lastName = m['this_Field_Is_Required']
    if (!values.password) error.password = m['this_Field_Is_Required']
    if (!values.email) error.email = m['this_Field_Is_Required']
    if (!values.image.length) error.image = m['this_Field_Is_Required']
    if (!values.typeId) error.typeId = m['this_Field_Is_Required']
    if (!values.id) error.id = m['this_Field_Is_Required']

    return error
  } 

  const onSubmit = async (values) => {
    console.log('values',values)
  } 

  
  return {
    file,
    setFile,
    initialValues,
    validate,
    onSubmit
  }
}
