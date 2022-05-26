import React, { useState } from 'react'
import Board from './Board'
import GameEndModal from './GameEndModal'
import PlayerDisplay from './PlayerDisplay'
import {Button} from 'react-bootstrap'

const Game = () => {
  const [showModal, setShowModal] = useState(false);
  const [boardPlacement, setBoardPlacement] = useState(
    ['','','','','','','','','']
  )
  const [isCurrentPlayerX, setIsCurrentPlayerX] = useState(true)
  const [xPlacement, setXPlacement] = useState(new Set())
  const [oPlacement, setOPlacement] = useState(new Set())

  const reset = () => {
    setBoardPlacement(['','','','','','','','','']);
    setIsCurrentPlayerX(true);
    setXPlacement(new Set())
    setOPlacement(new Set())
  }

  const checkWinner = (set) => {
    if(set.has(0)){
      if(set.has(1) && set.has(2)){
        return true;
      }if(set.has(3) && set.has(6)){
        return true;
      }
    }
    if(set.has(4)){
      if(set.has(0) && set.has(8)){
        return true;
      }
      if(set.has(2) && set.has(6)){
        return true;
      }
      if(set.has(1) && set.has(7)){
        return true;
      }
      if(set.has(3) && set.has(5)){
        return true;
      }
    }
    if(set.has(8)){
      if(set.has(2) && set.has(5)){
        return true;
      }
      if(set.has(6) && set.has(7)){
        return true;
      }
    }
    return false;
  }

  const handleWin = (player) => {
    switch (player){
      case 'x': 
        setIsCurrentPlayerX(null);
        setShowModal(true);
        break;
      case 'o':
        setIsCurrentPlayerX(null);
        setShowModal(true);
        break;
      case 'tie':
        setIsCurrentPlayerX(null);
        setShowModal(true);
        break;
    }
    
  }

  const handleClick = (index) => {
    if(boardPlacement[index] !== ''){
      return;
    }
    if(isCurrentPlayerX == null) return;
    else if(isCurrentPlayerX){ 
      boardPlacement[index] = 'x'
      xPlacement.add(index);
      if(checkWinner(xPlacement)){
        handleWin('x');
        return;
      };
    }
    else { 
      boardPlacement[index] = 'o'
      oPlacement.add(index);
      if(checkWinner(oPlacement)){
        handleWin('o');
        return;
      };
    }
    if(!boardPlacement.includes('')){
      handleWin('tie');
      return;
    }
    setIsCurrentPlayerX(!isCurrentPlayerX)
  }

  const hideModal = () => {
    setShowModal(false);
  }
  return (
    <>
      <Board setShowModal={setShowModal} boardPlacement={boardPlacement} handleClick={handleClick}/>
      <PlayerDisplay isCurrentPlayerX={isCurrentPlayerX}/>
      <Button onClick={reset}>Reset</Button>
      <GameEndModal showModal={showModal} hideModal={hideModal} reset={reset}/>
    </>
  )
}

export default Game
