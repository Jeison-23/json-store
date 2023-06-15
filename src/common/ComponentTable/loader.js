import React, { useEffect } from 'react'
import { Flex, Skeleton, Stack, Td, Tr } from '@chakra-ui/react'

export const TableLoader = (props) => {
  const {
    columnas = 5,
    repeat = 3,
    action = 3
  } = props

  let trArray = []
  let tdArray = []
  let acArray = []

  const toArray = () => {
    for (let i = 0; i < repeat; i++) {
      trArray.push(i)
    }
    for (let c = 0; c < columnas; c++) {
      tdArray.push(c)
    }
    for (let ac = 0; ac < 3; ac++) {
      acArray.push(ac)
      
    }
  }

  // useEffect(() => {
  //   toArray()
  // }, [])
  toArray()

  return (
    trArray.length > 0
      ? trArray.map((key) => {
        return (
          <Tr key={key}>
            {
              tdArray.length
                ? tdArray.map((k) => {
                  return (
                    <Td key={k}>
                      <Stack>
                        <Skeleton height='20px' w='100%' borderRadius='3px' />
                      </Stack>
                    </Td>
                  )
                })
                : undefined
            }
            {acArray.length
              ? <Td>
                <Flex justifyContent='flex-end' gap={4}>
                  {
                    acArray.map((x) => {
                      return (
                          <Stack key={x+2}>
                            <Skeleton height='30px' w='30px' borderRadius={50}/>
                          </Stack>
                      )
                    })
                  }
                </Flex>
              </Td>
              : undefined
            }
          </Tr>
        )
      })
      : <Tr><Td>no tr</Td></Tr>
  )
}