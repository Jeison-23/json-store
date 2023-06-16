'use client'
import { Grid, useDisclosure } from '@chakra-ui/react'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'
import { useCategoryContainer } from '@/hooks/useCategoryContainer'
import { ComponentTable } from '@/common/ComponentTable'
import { CategoryList } from '@/components/CategoryList'

export const CategoryContainer = () => {
  const {
    data,
    error,
    loading,
    refresh
  } = useCategoryContainer()

  const modalForm = useDisclosure()

  const action = [
    {
      label: 'nueva',
      handleAction: () => modalForm.onOpen(),
    },
    {
      label: 'Refrescar',
      handleAction: () => refresh(),
    }
  ]

  return (
    <Grid gap={2} justifyContent='center'>
      <Grid w='100vh'>
        <ComponentPageHeader title='Categorias' actions={action} />
        <CategoryList data={data?.category} loading={loading} modalForm={modalForm} />
      </Grid>
    </Grid>
  )
}
