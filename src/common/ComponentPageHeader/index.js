

import { Box, Button, Grid, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const ComponentPageHeader = (props) => {
  const {
    actions = [],
    title = 'Title',
    columnsActions = '3',
  } = props

  return (
    <Grid
      p={2}
      gap={4}
      alignItems='center'
      borderBlockEndWidth={2}
      templateColumns='auto auto'
    >
      <Text as='b' fontSize='3xl' >
        {title}
      </Text>

      <Grid
        gap={4}
        justifySelf='flex-end'
        templateColumns={`repeat(${columnsActions}, auto)`}
      >
        {actions.length
          ? actions.map((action, key) => {
            return (
              <Box key={key} >
               
                  <Button
                    variant='outline'
                    onClick={() => action?.handleAction ? action.handleAction() : undefined}
                  >
                    {action?.label}
                  </Button>
                
              </Box>
            )
          })
          : undefined
        }
      </Grid>
    </Grid>
  )
}
