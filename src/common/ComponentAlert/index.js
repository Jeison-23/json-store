import React from 'react'
import {
  Button,
  Grid,
  Icon,
  Text,
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
} from '@chakra-ui/react'
import { FiAlertCircle } from 'react-icons/fi';

export const ComponentAlert = (props) => {
  const {
    size = 'sm',
    icon,
    isOpen = false,
    onClose = () => { },
    title = 'Title Alert',
    positionButton = 'center',
    message = 'Body Message Alert',
  } = props

  return (
    <Modal size='sm' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader />

        <ModalBody>
          <Grid justifyItems='center' >
            <Icon as={icon || FiAlertCircle} boxSize={10} />
            <Text as='b' fontSize='xl' > {title} </Text>
            <Text>{message}</Text>
          </Grid>
        </ModalBody>

        <Grid gap={4} p={2} justifyContent={positionButton} templateColumns='repeat(2, auto)'>
            <Button size='sm' variant='outline' colorScheme='blue' onClick={onClose}>
              action
            </Button>
            <Button colorScheme='red' size='sm' variant='outline'>Secondary</Button>
        </Grid>
      </ModalContent>
    </Modal>
  )
}
