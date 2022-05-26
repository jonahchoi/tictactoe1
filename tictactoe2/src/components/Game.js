import React, { useState } from 'react'
import Board from './Board'
import GameEndModal from './GameEndModal'
import PlayerDisplay from './PlayerDisplay'

const Game = () => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  }
  return (
    <>
      <Board />
      <PlayerDisplay />
      <GameEndModal show={showModal} onHide={hideModal} />
    </>
  )
}

export default Game
