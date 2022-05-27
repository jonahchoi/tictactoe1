import { Modal,  Button } from 'react-bootstrap'
import React from 'react'

const GameEndModal = ({showModal, hideModal, reset, winner}) => {
  return (
    <Modal show={ showModal } onHide={hideModal} centered>
      <Modal.Header className='text-center' style={{backgroundColor: "#636e72"}} closeButton>
        <Modal.Title className='w-100'>{ winner === 'Tie' ? "It's a tie!" : `Player ${winner} wins!`}</Modal.Title>
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
