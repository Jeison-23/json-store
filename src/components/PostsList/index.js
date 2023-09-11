import React from 'react'
import { PostForm } from '../PostForm'
import { CardPost } from '../CardPost'
import { Divider, Grid } from '@chakra-ui/react'
import { ComponentModal } from '@/common/ComponentModal'

export const PostsList = (props) => {
  const {
    data,
    refresh,
    loading,
    modalPost
  } = props

  return (
    <Grid position='relative' maxW={{xl: '800px', lg: '600px', sm: '400px'}} gap={5} p={2}>
      {
        data?.length ?
        data.map((post,i) => (
          /*post.images.length*/ true ?
          <Grid key={i} gap={4}>
            {i > 0 ? <Divider /> : undefined}
            <CardPost
              type={post?.type}
              title={post?.title}
              images={post?.images}
              createAt={post?.createAt}
              description={post?.description}
              link={post?.link}
            />
          </Grid>
          : undefined
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
