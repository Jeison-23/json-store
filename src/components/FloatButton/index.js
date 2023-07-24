import React from 'react'
import { Grid } from '@chakra-ui/react'
// import { styles} from "./FloatButton.module.css"

export const FloatButton = ({ action, children }) => {
  return (
    <Grid
      h='60px'
      w='60px'
      top='90%'
      left='90vw'
      bg='#90CDF4'
      color='#1A202C'
      cursor='pointer'
      position='fixed'
      onClick={action}
      borderRadius={50}
      alignItems='center'
      justifyContent='center'
      _active={{ h: '65px', w: '65px' }}
      _hover={{ bg: '#3182CE', color: '#EBF8FF' }}
    >
      {children}
    </Grid>
  )
}

/*
<div
  className={styles.button}
  onClick={modalPost.onOpen}
>
  Nuevo
</div>
*/