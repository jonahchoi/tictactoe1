import { Modal } from 'react-bootstrap'
import React from 'react'

const GameEndModal = () => {
  return (
    <Modal centered>
      <Modal.Header>
        Win
      </Modal.Header>
      <Modal.Body>
        Play Again?
      </Modal.Body>
    </Modal>
  )
}

export default GameEndModal
