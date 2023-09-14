import React from 'react'
import { Box, Button, Flex, Grid, Icon, Img, Text } from '@chakra-ui/react'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'
import { DetailProductCArdInfo } from '../DetailProductCArdInfo'

export const DetailProductCard = (props) => {
  const {
    data,
    loading,
    prevImage,
    imagesPos,
    nextImage,
    showImagesActions,
    setShowImagesActions
  } = props

  return (
    <Grid p={2} alignItems='center' templateColumns='1fr 1fr' >
      <Grid
        h='600px'
        w='500px'
        bg='#FFFFFF'
        borderWidth={1}
        position='relative'
        borderLeftRadius='lg'
        alignContent='center'
        onMouseEnter={() => setShowImagesActions(state => !state)}
        onMouseLeave={() => setShowImagesActions(state => !state)}
      >
        <Text position='absolute' right={0} color='#111111' >{`${imagesPos + 1}/${data?.images.length}`}</Text>
        {showImagesActions ?
          <Icon
            top={300}
            boxSize={10}
            bg='#FFFFFF'
            color='#000000'
            position='absolute'
            onClick={prevImage}
            as={MdOutlineNavigateBefore}
            cursor={imagesPos > 0 ? 'pointer' : 'not-allowed'}
          />
          : undefined}

        {showImagesActions ?
          <Icon
            right={0}
            top={300}
            boxSize={10}
            bg='#FFFFFF'
            color='#000000'
            position='absolute'
            as={MdOutlineNavigateNext}
            onClick={() => nextImage(data?.images.length)}
            cursor={data?.images.length > (imagesPos + 1) ? 'pointer' : 'not-allowed'}
          />
          : undefined}

        {data?.images.length
          ?
          <Img
            justifySelf='center'
            minH='250px'
            maxW='450px'
            src={data?.images[imagesPos]}
          />
          : undefined
        }
      </Grid>

      <DetailProductCArdInfo data={data} />
    </Grid>
  )
}
