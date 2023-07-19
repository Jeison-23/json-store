'use client'
import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import { PostsList } from '@/components/PostsList'
import "@/css/AnimationButton.css"
import { Post } from '@/graphql/post'
import { useLazyQuery } from '@apollo/client'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'

export const PostsContainer = () => {
  const [getPost, { data, loading, error }] = useLazyQuery(Post)

  const refresh = (filter = {}) => {
    getPost({
      variables: { filter: filter },
      fetchPolicy: 'cache-and-network'
    })
  }

  useEffect(() => {
    refresh()
  }, [])

  return (
    <Grid m={4} >
      <ComponentPageHeader title='Publicaciones' />
      <Grid justifyContent='center'  >
        <PostsList data={data?.post} loading={loading} />
      </Grid>

      <div
        className="button"
        onClick={() => console.log('awo')}
      >
        Nuevo
      </div>
    </Grid>
  )
}
