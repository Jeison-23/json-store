import React, { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import { Box, Button, } from '@chakra-ui/react'
import { PreviewImage } from '../PreviewImage'

export const UserButtonFile = (props) => {
  const { setFieldValue } = useFormikContext()
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

  const [files, setFiles] = useState([])

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
      setFiles(arrayFiles)
    }
  }

  const getUrlFile = (file) =>  URL.createObjectURL(file) //`url(${URL.createObjectURL(file)})`

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

      <Box my={2}>
        {
          files.length
            ? files.map((file, i) => <PreviewImage key={i} url={getUrlFile(file)}/>)
            : <PreviewImage url='/no_image.jpeg' /> /* {`url('/no_image.jpeg')`} */ }
      </Box>
    </Box>
  )
}
