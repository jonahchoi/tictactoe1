import { Modal,  Button } from 'react-bootstrap'
import React from 'react'

const GameEndModal = ({showModal, hideModal, reset}) => {
  return (
    <Modal show={ showModal } onHide={hideModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Variable Wins!</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={hideModal}
        >
          Close
        </Button>
        <Button onClick={()=> {
          hideModal();
          reset();
        }}>
          Play Again?
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GameEndModal
