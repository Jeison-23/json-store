import React from 'react'
import { Form, Formik } from 'formik'
import { PayFormCard } from '../PayFormCard'
import { usePayForm } from '@/hooks/usePayForm'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { Button, Flex, Grid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

export const PayForm = (props) => {
  const {
    onSubmit,
    validate,
    cardNumber,
    initialValues,
    loadingValidate
  } = usePayForm(props)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ setFieldValue }) => (
        <Form autoComplete='off'>
          <Tabs >
            <TabList >
              <Tab>Datos de Entrega</Tab>
              <Tab>Pago</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Grid gap={2} >
                  <ComponetInputFormik
                    required
                    name='customerName'
                    type='text'
                    label='Nombre completo'
                    placeholder='jhon Doe'
                    onChangeInput={(v)=> setFieldValue('customerName', v?.toLowerCase()) }
                    inputTextTransform='capitalize'
                  />
                  <ComponetInputFormik
                    required
                    name='customerId'
                    type='text'
                    placeholder='1000100123'
                    label='Numero de documento'
                  />

                  <ComponetInputFormik
                    required
                    type='text'
                    name='address'
                    label='Dirección'
                    placeholder='cra 80 #78b-105 (int 105)'
                  />

                  <ComponetInputFormik
                    required
                    type='text'
                    name='phone'
                    label='Numero de telefono '
                    placeholder='300 456 78 90'
                  />

                  <ComponetInputFormik
                    name='reciverName'
                    type='text'
                    placeholder='si tu recibes lo puedes dejar vació'
                    label='Nombre de quien recive'
                  />
                  {/* <Flex mt={4} gap={2} justifyContent='end'>
                    <Button
                      size='sm'
                      borderRadius={0}
                      onClick={() => setFormPage(1)}
                      isLoading={loadingValidate}
                      colorScheme='blue'
                      variant='outline'
                    >
                      Siguiente
                    </Button>
                  </Flex> */}
                </Grid>
              </TabPanel>

              <TabPanel>
                <PayFormCard cardNumber={cardNumber} loading={loadingValidate} setFieldValue={setFieldValue} />

                <Flex mt={4} gap={2} justifyContent='end'>
                  <Button
                    size='sm'
                    type='reset'
                    borderRadius={0}
                    isLoading={loadingValidate}
                    colorScheme='red'
                    variant='outline'
                  >
                    Limpiar
                  </Button>

                  <Button
                    size='sm'
                    type='submit'
                    borderRadius={0}
                    variant='outline'
                    colorScheme='purple'
                    isLoading={loadingValidate}
                  >
                    Aceptar
                  </Button>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>

        </Form>
      )}
    </Formik>

  )
}
