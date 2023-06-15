'use client'
import { Grid } from '@chakra-ui/react'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'
import { useCategoryContainer } from '@/hooks/useCategoryContainer'
import { ComponentTable } from '@/common/ComponentTable'

export const CategoryContainer = () => {
  const {
    data,
    error,
    loading,
    refresh
  } = useCategoryContainer()
  console.log('data',data);

  const header = [
    { field: 'name', label: 'name'},
    { field: 'key', label: 'key'},
    { field: '_id', label: 'id'}
  ]

  const action = [
    {
      label: 'Refrescar',
      handleAction: () => refresh(),
    }
  ]
  return (
    <Grid gap={2} justifyContent='center'>
      <Grid w='100vh'>
      <ComponentPageHeader title='Categories' actions={action}  />
      {
        data?.category && <ComponentTable tableHead={header} list={data?.category} loading={loading} />
      }
      </Grid>
    </Grid>
  )
}
