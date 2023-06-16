
import {
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export const ComponentModal = (props) => {
  const {
    title = 'Modal Title',
    body = '',
    isOpen = false,
    onClose = ()=> {},
    footerButtons = [],
    closeButton = false
  } = props

  return (
    <Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          { !closeButton && <ModalCloseButton /> }
          <ModalBody>
            {body}
          </ModalBody>

          {
            footerButtons.length
              ? <ModalFooter>
                {
                  footerButtons.map((Button, i) => {
                    return (
                      <Button key={i} colorScheme='blue' mr={3} onClick={Button?.action || ''}>
                        {Button?.label}
                      </Button>
                    )
                  })
                }
              </ModalFooter>
              : undefined
          }
        </ModalContent>
      </Modal>
    </Grid>
  )
}
