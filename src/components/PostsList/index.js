import React from 'react'
import { Grid } from '@chakra-ui/react'
import { CardPost } from '../CardPost'
import { ComponentModal } from '@/common/ComponentModal'
import { PostForm } from '../PostForm'

export const PostsList = ({refresh, data, loading, modalPost}) => {
  return (
    <Grid position='relative' gap={4} p={2}>
      {
        data?.length ?
        data.map((post,i) => (
          <CardPost
            key={i}
            createAt={post?.createAt}
            type={post?.type}
            title={post?.title}
            images={post?.images}
            description={post?.description}
            link={post?.link}
          />
        ))
        : undefined
      }
      <ComponentModal
        title='Crear Post'
        body={
          <PostForm refresh={refresh} modalPost={modalPost} />
        }
        isOpen={modalPost.isOpen}
        onClose={modalPost.onClose}
      />
    </Grid>
  )
}
