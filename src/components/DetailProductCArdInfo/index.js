import React from 'react'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { AiOutlineClose } from 'react-icons/ai'
import { Button, Flex, Grid, Icon, Text } from '@chakra-ui/react'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'

export const DetailProductCArdInfo = ({ data }) => {
  const router = useRouter()

  return (
    <Grid
      p={1}
      gap={4}
      h='650px'
      color='#FFFFFF'
      bg='#000111'
      position='relative'
      alignContent='center'
    >
      <Icon
        m={1}
        right={0}
        boxSize={5}
        color='#FFFFFF'
        cursor='pointer'
        position='absolute'
        as={AiOutlineClose}
        onClick={() => router.replace('/products')}
      />

      <Grid >
        <Text
          as='b'
          fontSize='4xl'
          textAlign='center'
        >
          {`${data?.category?.name} - ${data?.name}`}
        </Text>

        <Grid gap={2} mx={7}>
          <Text
            maxW='420px'
            fontSize='xl'
            _firstLetter={{ textTransform: 'uppercase' }}
          >
            {data?.description}
          </Text>

          <Text
            as='b'
            maxW='420px'
            noOfLines={4}
          >
            hay {data?.stock} unidades disponibles
          </Text>

          <Flex gap={1}>
            <Text>
              Precio:
            </Text>
            <Text>
              {data?.price?.toLocaleString('es', { style: "currency", currency: "COP" })}
            </Text>
          </Flex>

          <Formik initialValues={{ count: 1 }}>
            {() => (
              <Form>
                <Grid marginY={4} gap={2}>
                <ComponetInputFormik
                  required
                  maxW='30px'
                  name='count'
                  type='number'
                  label='Cantidad'
                />
                <Button alignSelf='end' >
                  Agregar al carrito
                </Button>
                </Grid>
              </Form>
            )}
          </Formik>

        </Grid>

      </Grid>

    </Grid>
  )
}
