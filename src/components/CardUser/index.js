import React from 'react'
import {
  Box,
  Flex,
  Grid,
  Image,
  Text
} from '@chakra-ui/react'

export const CardUser = () => {
  return (
    <Flex
      p={1}
      gap={2}
      color='#000000'
      borderRadius='lg'
      borderWidth='1px'
    >
      <Box>
        <Grid>
          <Image
            justifySelf='center'
            h='120px'
            w='90px'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pCNaVg5-i4AFXFYM7HRG8YYFT-GURMkWSzuJrYR0y7eGGLcXmJ7FoyHqkorhD4vB3XQ&usqp=CAU'
          />
        </Grid>
        <Text maxWidth='130px' fontSize='sm' noOfLines={1}>Jhon China</Text>
        <Text fontSize='sm'></Text>
      </Box>

      <Box>
        <Flex gap={1} // maxW='290px'
        >
          <Text as='b' fontSize='4xl'  >JSON STORE</Text>
          <Grid alignSelf='center' maxW='50px'>
            <Text fontSize='2xs'>
              ROL ADMIN
            </Text>
          </Grid>
        </Flex>

        <Box>
          <Text fontSize='sm'>Cc 1234560943</Text>
          <Text fontSize='sm'>phone 123-345-098-43</Text>
          <Text fontSize='sm'>email emailrealnofake@gmail.com</Text>
        </Box>
      </Box>
    </Flex>
  )
}