import React, { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import { Box, Button, Grid, } from '@chakra-ui/react'
import { PreviewImage } from '../PreviewImage'

export const ButtonImageFile = (props) => {
  const { values, setFieldValue } = useFormikContext()
  const {
    name,
    size,
    variant,
    children,
    isDisabled,
    accept = "",
    colorScheme,
    state = [],
    setState = () => { },
    multiple = false,
  } = props

  const [urlImage, setUrlImage] = useState('')
  const [files, setFiles] = useState([])

  useEffect(() => {
    if (values[name]) {
      if (typeof values[name] === 'string') {
        setUrlImage(values[name])
      }else{
        setUrlImage('')
      }
    }
  }, [values])
  
  useEffect(() => {
    if (files.length) {
      setFieldValue(name, files)
      setState(files)
    }
  }, [files])

  const handleChanged = (values) => {
    if (values.length) {
      let arrayFiles = []
      for (let i = 0; i < values.length; i++) {
        let _file = values[`${i}`]
        const findFile = files.findIndex(element => element.name === _file.name)
        if (findFile < 0) {
          arrayFiles.push(_file)
        }
      }
      if (multiple) {
        setFiles((state) => state.concat(arrayFiles))
      } else {
        setFiles(arrayFiles)
      }
    }
  }

  const getUrlFile = (file) => URL.createObjectURL(file)

  const removeFile = (fileName) => {
    const modificado = files.filter(file => file.name !== fileName )
    setFiles(modificado)
  }

  return (
    <Box>
      <Button
        as='label'
        size={size}
        htmlFor={name}
        variant={variant}
        isDisabled={isDisabled}
        colorScheme={colorScheme}
        cursor='copy'
      >
        {children}
      </Button>

      <input
        id={name}
        type='file'
        accept={accept}
        multiple={multiple}
        style={{ display: 'none' }}
        onChange={(value) => handleChanged(value.target.files)}
      />

      <Grid gap={2} my={2} templateColumns={`repeat(${multiple ? 3 : 1}, 1fr)`}>
        {
          files.length
            ? files.map((file, i) => (
              <Box key={i} cursor='alias' onClick={() => removeFile(file.name)}>
                <PreviewImage
                  
                  url={getUrlFile(file)}
                />
              </Box>
            ))
            : <PreviewImage url={urlImage || '/no_image.jpeg'} />}
      </Grid>
    </Box>
  )
}
