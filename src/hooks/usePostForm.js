import { useEffect } from 'react'
import {PostSave } from '@/graphql/post'
import { useMutation } from '@apollo/client'

export const usePostForm = ({refresh, modalPost}) => {
  const [createPost, { data, loading, error }] = useMutation(PostSave)

  const initialValues = {
    _id: null,
    type: '',
    title: '',
    images: [],
    description: ''
  }

  const dataSelect = [
    {
      label: 'informativo',
      value: 'info'
    },
    {
      label: 'Alerta',
      value: 'warn'
    },
    {
      label: 'Promoción',
      value: 'prom'
    }
  ]

  const onSubmit = async (values) => {
    console.log(values)
    try {
      await createPost( {variables: { input: values }})
      
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (error) {
      console.log('ha ocurrido un error', error)
    } else if (data?.postSave) {
      console.log('all good');
      refresh()
      modalPost.onClose()
    }

  }, [data, error])

  return {
    dataSelect,
    initialValues,
    loading,
    onSubmit
  }
}
