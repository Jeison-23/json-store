'use client'
import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import { PostsList } from '@/components/PostsList'
import { useLazyQuery } from '@apollo/client'
import { Post } from '@/graphql/post'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'

export const PostsContainer = () => {
  const [getPost, {data, loading, error }] = useLazyQuery(Post)
  const refreshUsers = (filter = {}) => {
    getPost({
      variables: { filter: filter },
      fetchPolicy: 'cache-and-network'
    })
  }

  useEffect(() => {
    refreshUsers()
  }, [])
  
  return (
    <Grid m={4} >
      <ComponentPageHeader title='Posts' />
      <Grid justifyContent='center'  >
        <PostsList data={data?.post} loading={loading} />
      </Grid>
    </Grid>
  )
}
