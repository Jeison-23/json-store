import React from 'react'
import { Grid, Skeleton, SkeletonText } from '@chakra-ui/react'
import { useGeneralFunction } from '@/hooks/useGeneralFunction'

export const ProductCardLoader = () => {
  const { createArray } = useGeneralFunction()

  return (
    <Grid templateColumns='1fr 1fr 1fr' gap={2}>
      {createArray(3).map((i) => (
        <Grid key={i} padding='6' boxShadow='lg' bg='#F7F7F7'>
          <Skeleton justifySelf='center' height='200px' w='410px' />
          <SkeletonText mt='4' noOfLines={1} spacing='2' skeletonHeight='4' w='150px' />
          <SkeletonText mt='4' noOfLines={1} spacing='1' skeletonHeight='4' w='120px' />
          <SkeletonText mt='4' noOfLines={1} spacing='1' skeletonHeight='4' w='100px' />
        </Grid>
      ))}
    </Grid>
  )
}
