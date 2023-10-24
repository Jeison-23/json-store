import { useContext, useState } from "react"
import { ShoppingCartContext } from "@/context/ShoppingCartContext"

export const usePayForm = () => {
  const [pageError, setPageError] = useState([])
  const { productsSelected } = useContext(ShoppingCartContext)
  const [loadingValidate, setLoadingValidate] = useState(false)

  const initialValues = {
    id: '',
    name: '',
    phone: '',
    address: '',
    reciver: '',
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

    if (!values.name) {
      error.name = 'Este campo es requerido'
    }
    if (!values.id) {
      error.id = 'Este campo es requerido'
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
    const response = await validateCreditCard(numberAssemble(values.cardNumber))
    if (response) {
      console.log('numero valido')

    } else {
      console.log('numero invalido')
      
    }

    console.log(values)
    setLoadingValidate(false)
  }

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
