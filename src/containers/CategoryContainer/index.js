'use client'
import { Box, Grid, useDisclosure } from '@chakra-ui/react'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'
import { useCategoryContainer } from '@/hooks/useCategoryContainer'
import { CategoryList } from '@/components/CategoryList'

export const CategoryContainer = () => {
  const {
    data,
    error,
    loading,
    refetch
  } = useCategoryContainer()

  const modalForm = useDisclosure()

  const action = [
    {
      label: 'nueva',
      handleAction: () => modalForm.onOpen(),
    },
    {
      label: 'Refrescar',
      handleAction: () => refetch({}),
    }
  ]

  return (
    <Box m={4}>
      <Grid gap={2} >
        <ComponentPageHeader title='Categorias' actions={action} />
        <CategoryList data={data?.category} loading={loading} modalForm={modalForm} refetch={refetch} />
      </Grid>
    </Box>
  )
}
