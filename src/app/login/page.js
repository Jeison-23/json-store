
import { Grid, Text } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Grid bg='red' w='200px' h='200px' borderRadius={100} alignContent='center' justifyItems='center'>
      <Text as='b' fontSize='6xl' >Login</Text>
    </Grid>
  )
}

export default Login