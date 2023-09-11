import React from 'react'
import moment from 'moment/moment'
import { colorPost } from '@/constants/colorPosts'
import { Box, Button, Flex, Grid, Img, Text } from '@chakra-ui/react'

export const CardPost = (props) => {
  const {
    link,
    title,
    createAt,
    type = '',
    images = [],
    description,
  } = props

  return (
    <Grid
      borderRadius='lg'
      borderWidth={1}
      // minH='130px'
      gap={1}
    >
      <Grid
        minH='10px'
        borderTopRadius='lg'
        justifyItems='center'
        alignItems='center'
        color='#FFFFFF'
        bg={colorPost[type].colorChakra}
      >
        <Text
          as='b'
          fontSize='2xl'
        >
          {title || 'Title post+'}
        </Text>
      </Grid>

      <Grid px={2} paddingBottom={2} gap={4}>
        {images.length
          ? <Grid gap={2} templateColumns={`repeat(${images.length >= 2 ? 3 : 1}, auto)`} >
            {
              images.map((image, i) => (
                <Img
                  justifySelf='center'
                  h='250px'
                  maxW='300px'
                  src={image}
                  key={i}
                />
              ))
            }
          </Grid>
          : undefined
        }
        <Grid>
          <Text _firstLetter={{ textTransform: 'uppercase' }} fontSize='lg' alignSelf='center' justifySelf='flex-start'>
            {description}
          </Text>
        </Grid>

        {link ?
          <Flex>
            <Button variant='link' justifySelf='end'>Redirigir</Button>
          </Flex>
          : undefined}

        <Flex >
          <Grid
            px={1}
            h='25px'
            width='190px'
            color='#ffffff'
            cursor='default'
            alignItems='center'
            bg={colorPost[type].colorChakra}
          >
            {moment(createAt).format('DD MMM YY - hh:mm a')}
          </Grid>
          <Box
            h='25px'
            borderTop='12px solid transparent'
            borderRight='12px solid transparent'
            borderBottom='12px solid transparent'
            borderLeft={`12px solid ${colorPost[type].colorHtml}`}
          >
          </Box>
        </Flex>
      </Grid>
    </Grid>
  )
}
