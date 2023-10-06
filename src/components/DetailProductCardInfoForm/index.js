import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { Button, Grid } from '@chakra-ui/react'
import { ComponetInputFormik } from '@/common/ComponetInputFormik'
import { ShoppingCartContext } from '@/context/ShoppingCartContext'

export const DetailProductCardInfoForm = ({product}) => {
  const { productsSelected, setProductsSelected } = useContext(ShoppingCartContext)

  const onSubmit = (values) => {
    const productToCard = {...product}
    const updateCar = [...productsSelected]
    productToCard.quantity = values.count
    const posProduct = productsSelected.findIndex((ele) => ele._id === productToCard._id)

    if (posProduct < 0) {
      updateCar.push(productToCard)
      setProductsSelected(updateCar)

    } else {
      const product = productsSelected.find((ele) => ele._id === productToCard._id)
      product.quantity = + values.count
      updateCar.splice(posProduct, 1, product)
      setProductsSelected(updateCar)

    }
  }

  const validateProduct = () => {
    const productFind = productsSelected.find(ele => ele._id === product?._id)

    if (productFind?.quantity) {
      return productFind.quantity

    } else {
      return 1

    }
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={{ count: validateProduct() }}>
      {({ values, setFieldValue }) => (
        <Form>
          <Grid
            gap={2}
            marginY={4}
            position='relative'
          >
            <ComponetInputFormik
              required
              maxW='10%'
              name='count'
              type='number'
              label='Cantidad'
            />
            <Grid
              gap={1}
              top={7}
              left={20}
              position='absolute'
            >
              <Button
                size='md'
                variant='link'
                onClick={() => setFieldValue('count', values.count + 1)}
              >
                +
              </Button>
              <Button
                size='md'
                variant='link'
                onClick={() => setFieldValue('count', values.count - 1)}
              >
                -
              </Button>
            </Grid>
            <Button
              type='submit'
              alignSelf='end'
            >
              Agregar al carrito
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
