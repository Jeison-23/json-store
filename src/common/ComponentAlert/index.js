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
  ModalCloseButton,
  ModalOverlay,
  ModalFooter,
  Divider,
} from '@chakra-ui/react'
import { FiAlertCircle } from 'react-icons/fi'

export const ComponentAlert = (props) => {
  const {
    icon,
    size = 'sm',
    message = '',
    iconColor = '',
    isOpen = false,
    actionsButton = [],
    closeButton = true,
    onClose = () => { },
    alertCentered = false,
    title = 'Title Alert',
    positionButton = 'center',
    clickCloseOnOffSide = false,
  } = props

  return (
    <Modal
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      isCentered={alertCentered}
      closeOnOverlayClick={clickCloseOnOffSide}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        {closeButton && <ModalCloseButton />}
        <ModalBody>
          <Grid justifyItems='center' gap={4}>
            <Icon
              as={icon || FiAlertCircle}
              color={iconColor}
              boxSize={10}
            />
            <Grid justifyItems='center' gap={2} >
              <Text as='b' fontSize='xl' > {title} </Text>
              <Text maxW='280px'>{message}</Text>
            </Grid>
          </Grid>
        </ModalBody>

        <Divider orientation='horizontal' />

        <ModalFooter justifyContent={positionButton} >
          {actionsButton.length
            ? <Grid gap={4} templateColumns={`repeat(3,auto)`}>
              {
                actionsButton.map((button, i) => {
                  return (
                    <Button
                      key={i}
                      size={button?.size}
                      color={button?.color}
                      variant={button?.variant}
                      colorScheme={button?.colorScheme}
                      isLoading={button?.loading}
                      isDisabled={button?.disabled}
                      onClick={button?.action}
                    >
                      {button?.label}
                    </Button>
                  )
                })
              }
            </Grid>
            : undefined}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
