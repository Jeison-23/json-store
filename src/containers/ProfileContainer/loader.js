import React from 'react'
import { Flex, Grid, Skeleton, SkeletonCircle } from '@chakra-ui/react'

export const Loader = () => {
  return (
    <Grid my={4}>
      <Flex justifySelf='center' gap={2} h='500px' w='90%' >
        <Grid
          w='50%'
          justifyContent='center'
        >
          <SkeletonCircle size='300' />
        </Grid>

        <Grid
          gap={4}
          w='100%'
          templateRows='70px 1fr'
        >
          <Flex p={4} justifyContent='space-between'>
            <Skeleton height='40px' w='350px' />
            <Flex gap={2}>
            <Skeleton height='40px' w='20' />
            <Skeleton height='40px' w='20' />
            </Flex>
          </Flex>

          <Grid p={4} templateColumns='1fr 1fr' >
            <Skeleton height='20px' w='350px' />
            <Skeleton height='20px' w='300px' />

            <Skeleton height='20px' w='350px' />
            <Skeleton height='20px' w='300px' />

            <Skeleton height='20px' w='350px' />
            <Skeleton height='20px' w='300px' />

            <Skeleton height='20px' w='350px' />
            <Skeleton height='20px' w='300px' />

            <Skeleton height='20px' w='350px' />
            <Skeleton height='20px' w='300px' />
          </Grid>
        </Grid>
      </Flex>
    </Grid>
  )
}
