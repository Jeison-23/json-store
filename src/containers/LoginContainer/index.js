'use client'
import React from 'react'
import { Form, Formik } from 'formik'
import { TfiEmail } from 'react-icons/tfi'
import { useLoginContainer } from '@/hooks/useLoginContainer'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Box, Button, Flex, Grid, Icon, Text } from '@chakra-ui/react'

export const LoginContainer = () => {
  const {
    loading,
    onSubmit,
    validate,
    showPassword,
    initialValues,
    setShowPassword,
  } = useLoginContainer()

  return (
    <Grid
      h='100%'
      bgSize='cover'
      bgPosition='center'
      bgRepeat='no-repeat'
      alignContent='center'
      justifyItems='center'
      bgImage='url(/bgLogin.jpeg)'
    >
      <Grid>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <Grid
                p={2}
                gap={2}
                minW='400px'
                height='400px'
                color='#FFFFFF'
                borderRadius='lg'
                bg='rgba(0, 0, 0, 0.7)'
              >
                <Grid w='390px' alignItems='center' textAlign='center'>
                  <Text as='b' fontFamily='fantasy' fontSize='5xl'>Iniciar sessión</Text>
                </Grid>
                <Grid px={2} gap={2}>
                  <Grid
                    gap={2}
                    alignItems='center'
                    templateColumns='auto 1fr'
                  >
                    <Box h='24px' w='24px' position='relative' >
                      <Icon
                        boxSize='6'
                        as={TfiEmail}
                        bottom='-4px'
                        position='absolute'
                      />
                    </Box>
                    <ComponetInputFormik
                      name='email'
                      variant='flushed'
                      placeholder='Correo'
                    />
                  </Grid>
                  <Grid
                    gap={2}
                    alignItems='center'
                    templateColumns='auto 1fr'
                  >
                    <Box h='24px' w='24px' position='relative' >
                      <Icon
                        boxSize='6'
                        bottom='-4px'
                        cursor='pointer'
                        position='absolute'
                        onClick={() => setShowPassword(val => !val)}
                        as={!showPassword ? AiOutlineEye : AiOutlineEyeInvisible}
                      />
                    </Box>
                    <ComponetInputFormik
                      name='password'
                      variant='flushed'
                      placeholder='Contraseña'
                      type={!showPassword ? 'password' : 'text'}
                    />
                  </Grid>
                </Grid>

                <Flex gap={2} alignItems='center' justifyContent='flex-end' >
                  <Button
                    type='reset'
                    isLoading={loading}
                    fontFamily='fantasy'
                  >
                    cancelar
                  </Button>

                  <Button
                    bg='white'
                    _hover={{bg: 'white.600'}}
                    color='black'
                    type='submit'
                    isLoading={loading}
                    fontFamily='fantasy'
                  >
                    Aceptar
                  </Button>
                </Flex>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  )
}
