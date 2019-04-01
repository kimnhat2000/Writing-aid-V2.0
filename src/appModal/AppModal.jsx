import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const AppModal = ({open, onClose, onAccept}) => (
  <Modal basic size='small' open={open}>
    <Header icon='cog' content='ARE YOU SURE?' />
    <Modal.Content>
      <p>
		  Your unsaved works will be cleared, are you sure you want to close?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted onClick={onClose}>
        <Icon name='remove' /> Not so sure
      </Button>
      <Button color='green' inverted onClick={onAccept}>
        <Icon name='checkmark' /> Absolutely
      </Button>
    </Modal.Actions>
  </Modal>
)

export default AppModal
