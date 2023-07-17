import React from 'react'
import {
  Box,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  Tooltip
} from '@chakra-ui/react'

export const CardUser = ({ user,  options = [] }) => {

  return (
    <Grid
      p={1}
      gap={2}
      borderRadius='lg'
      borderWidth='1px'
      templateColumns={`repeat(${options.length ? 3 : 2}, auto)`}
    >
      <Box>
        <Grid >
          <Image
            borderRadius={'md'}
            justifySelf='center'
            w='200px' h='130px'
            src={user?.image}
          />
        </Grid>
        <Text
          as='b'
          maxWidth='200px'
          textTransform='capitalize'
          fontSize='sm'
          noOfLines={1}
        >
          {`${user?.firstName} - ${user?.lastName}`}
        </Text>
      </Box>

      <Box>
        <Flex gap={1}>
          <Text as='b' fontSize='4xl'  >JSON STORE</Text>
          <Grid alignSelf='center' maxW='40px'>
            <Text textTransform='uppercase' fontSize='2xs'>
              {`ROL ${user?.role?.rol}`}
            </Text>
          </Grid>
        </Flex>

        <Box>
          <Flex>
          <Text textTransform='capitalize' fontSize='sm'>{`${user?.typeId}`}: </Text>
          <Text fontSize='sm'>{` ${user?.id}`}</Text>
          </Flex>
          <Flex gap={1}>
            <Text fontSize='md' as='b'>Telefono:</Text>
            <Text fontSize='sm'> {user?.phone || '_ _ _ _ _'} </Text>
          </Flex>
          <Flex gap={1}>
            <Text fontSize='sm' as='b'>Correo:</Text>
            <Text fontSize='sm' >{`Correo: ${user?.email}`}</Text>
          </Flex>
        </Box>
      </Box>

      <Box>
        {options.length
          ? options.map((option, i) => (
            <Tooltip key={i} hasArrow label={option?.label} >
              <Box>
                <Icon cursor='pointer' as={option?.icon} onClick={() => option?.action(user)} />
              </Box>
            </Tooltip>
          ))
          : undefined
        }
      </Box>
    </Grid>
  )
}