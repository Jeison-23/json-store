import React from 'react'
import {
  Td,
  Th,
  Tr,
  Flex,
  Table,
  Tbody,
  Thead,
  IconButton,
  TableContainer,
  Text,
  Tooltip,
  Box,
} from '@chakra-ui/react'
import { TableLoader } from './loader'
import { useRouter } from 'next/navigation'

export const ComponentTable = (props) => {
  const router = useRouter()
  const {
    list = [],
    actions = [],
    tableHead = [],
    loading = false,
    dinamicValue = ''
  } = props

  return (
    <TableContainer borderWidth='1px'>
      <Table variant='simple'>
        <Thead >
          <Tr bg='blackAlpha.800'>
            {tableHead.length > 0 &&
              tableHead.map((column, index) => {
                return (
                  <Th color='white' key={index}>
                    {column?.label ? column?.label : column}
                  </Th>
                )
              })
            }
            {actions.length > 0
              && <Th color='white' isNumeric > actions </Th>
            }
          </Tr>
        </Thead>
        <Tbody>
          {!loading
            ? list.length > 0
              ? list.map((row, index) => {
                if (tableHead.length > 0) {
                  return (
                    <Tr key={index}>
                      {tableHead.map((column, i) => {
                        return (
                          <Td key={i} maxW='480px'>
                            <Text noOfLines={1}> {column?.field ? row[column.field] : row[column]}</Text>
                          </Td>
                        )
                      })}

                      {actions.length > 0 &&
                        <Td isNumeric>
                          <Flex justifyContent='flex-end' gap={2}>
                            {actions.map((action, key) => {
                              return (
                                <Tooltip key={key} label={action?.label}>
                                  <Box>
                                    <IconButton
                                      variant='outline'
                                      _hover={{ cursor: 'pointer' }}
                                      icon={action?.icon}
                                      onClick={() => {
                                        action?.handler ? action.handler(row) : {}
                                        action?.route ? router.replace(`${action?.route}/${row[dinamicValue]}`) : undefined
                                      }}
                                    />
                                  </Box>
                                </Tooltip>
                              )
                            })}
                          </Flex>
                        </Td>}
                    </Tr>
                  )
                }
              })
              : <Tr><Td>Sin Datos</Td></Tr>
            : <TableLoader columnas={tableHead.length} repeat={5} />
          }
        </Tbody>
      </Table>
    </TableContainer>
  )
}
