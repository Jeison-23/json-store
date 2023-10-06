import React, { useRef } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton
} from '@chakra-ui/react'

export const ComponentDrawer = (props) => {
  const {
    size = '',
    body = '',
    title = '',
    footer = '',
    onOpen = '',
    isOpen = false,
    onClose = () => {},
  } = props

  const btnRef = useRef()

  return (
      <Drawer
        size={size}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>
            {body}
          </DrawerBody>

          <DrawerFooter>
           {footer}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}
