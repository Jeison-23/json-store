import React from 'react'
import { Grid } from '@chakra-ui/react'
import { CardPost } from '../CardPost'

export const PostsList = ({data, loading}) => {
  return (
    <Grid position='relative' gap={2} p={2}>
      {
        data?.length ?
        data.map((post,i) => (
          <CardPost
            key={i}
            type={post?.type}
            title={post?.title}
            images={post?.images}
            description={post?.description}
            link={post?.link}
          />
        ))
        : undefined
      }
      
    </Grid>
  )
}
