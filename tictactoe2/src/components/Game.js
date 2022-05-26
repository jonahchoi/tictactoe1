import React from 'react'
import Board from './Board'
import GameEndModal from './GameEndModal'
import PlayerDisplay from './PlayerDisplay'

const Game = () => {
  return (
    <>
      <Board />
      <PlayerDisplay />
      <GameEndModal />
    </>
  )
}

export default Game
