'use client'
import React from 'react'
import { Grid } from '@chakra-ui/react'
import { PostsList } from '@/components/PostsList'
import { FloatButton } from '@/components/FloatButton'
import { usePostsContainer } from '@/hooks/usePostsContainer'
import { ComponentPageHeader } from '@/common/ComponentPageHeader'

export const PostsContainer = ({admin}) => {
  const {
    data,
    loading,
    refresh,
    modalPost,
  } = usePostsContainer()

  return (
    <Grid m={4} >
      {/* <ComponentPageHeader title='Publicaciones' /> */}
      <Grid justifyContent='center'>
        <PostsList modalPost={modalPost} refresh={refresh} data={data?.post} loading={loading} />
      </Grid>
      {admin && <FloatButton action={modalPost.onOpen}>Nuevo</FloatButton>}
    </Grid>
  )
}
