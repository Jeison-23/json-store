import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "@/context/ShoppingCartContext"
import { useMutation } from "@apollo/client"
import { SaleSave } from "@/graphql/sale"

export const usePayForm = ({payForm}) => {
  const [pageError, setPageError] = useState([])
  const [loadingValidate, setLoadingValidate] = useState(false)
  const { productsSelected, clearCart } = useContext(ShoppingCartContext)

  const [saveSale, { data, loading, error }] = useMutation(SaleSave)

  const initialValues = {
    _id: '',
    customerName: '',
    customerId: '',
    phone: '',
    address: '',
    reciverName: '',
    cardNumber: '',
    purchasedItems: productsSelected.map((item) => {
      return {
        _id: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        category: {
          _id: item.category._id,
          key: item.category.key,
          name: item.category.name
        },
      }
    }),
    cvv: '',
  }

  const cardNumber = (v, name, setFieldValue) => {
    let chain = ['']
    if (v.length) {
      let pos = 0
      let accu = 0
      for (let i = 0; i < v.length; i++) {
        if (v[i] !== ' ') {
          if (accu < 4) {
            accu++
            chain[pos] += v[i]
          } else {
            accu = 1
            pos++
            chain[pos] = v[i]
          }
        }
      }
    }
    setFieldValue(name, chain.join(' '))
  }

  const validateNumber = (value, val) => {
    let count = 0
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== ' ') {
        count++
      }
    }
    return count !== val
  }

  const validate = (values) => {
    const error = {}

    if (!values.customerName) {
      error.customerName = 'Este campo es requerido'
    }
    if (!values.customerId) {
      error.customerId = 'Este campo es requerido'
    }
    if (!values.address) {
      error.address = 'Este campo es requerido'
    }
    if (!values.phone) {
      error.phone = 'Este campo es requerido'
    }
    if (!values.cardNumber) {
      error.cardNumber = 'Este campo es requerido'

    } else if (validateNumber(values.cardNumber, 16)) {
      error.cardNumber = 'Debes ingresar un numero valido'
    }
    if (!values.cvv) {
      error.cvv = 'Este campo es requerido '
    }

    return error

  }

  const luhnAlgorithm = (cardNumber) => {
    const cardDigits = cardNumber.toString().split('').map(Number)
    let sum = 0
    let alternate = false

    for (let i = cardDigits.length - 1; i >= 0; i--) {
      let digit = cardDigits[i]

      if (alternate) {
        digit *= 2
        if (digit > 9) {
          digit -= 9
        }
      }

      sum += digit;
      alternate = !alternate
    }

    return sum % 10 === 0
  }

  const validateCreditCard = (cardNumber) => {
    return new Promise((resolv, reject) => {
      setTimeout(() => {
        resolv(luhnAlgorithm(cardNumber))
      }, 5000)
    })
  }

  const numberAssemble = (value) => {
    let newChain = ''
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== ' ') {
        newChain += value[i]
      }
    }
    return newChain

  }

  const onSubmit = async (values) => {
    setLoadingValidate(true)
    const data = {...values}
    data.cardNumber = numberAssemble(values.cardNumber)
    const response = await validateCreditCard(data.cardNumber)

    if (response) {
      await saveSale({variables: { input: data } })

    } else {
      console.log('numero invalido',data)
      setLoadingValidate(false)
      
    }
    
  }

  useEffect(() => {
    if (error) {
      console.log('ha ocurrido un error',error)
      setLoadingValidate(false)

    } else if (data?.saleSave) {
      setLoadingValidate(false)
      clearCart()
      payForm.onClose()
    }

  }, [data, error])

  return {
    onSubmit,
    validate,
    pageError,
    setPageError,
    cardNumber,
    initialValues,
    loadingValidate,
  }
}
