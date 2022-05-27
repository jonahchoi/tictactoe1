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
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState('');

  const reset = () => {
    setBoardPlacement(['','','','','','','','','']);
    setIsCurrentPlayerX(true);
    setXPlacement(new Set())
    setOPlacement(new Set())
    setWinningLine('');
  }

  const checkWinner = (set) => {
    if(set.has(0)){
      if(set.has(1) && set.has(2)){
        setWinningLine('row1');
        return true;
      }
      if(set.has(3) && set.has(6)){
        setWinningLine('col1');
        return true;
      }
    }
    if(set.has(4)){
      if(set.has(0) && set.has(8)){
        setWinningLine('diag1');
        return true;
      }
      if(set.has(2) && set.has(6)){
        setWinningLine('diag2');
        return true;
      }
      if(set.has(1) && set.has(7)){
        setWinningLine('col2');
        return true;
      }
      if(set.has(3) && set.has(5)){
        setWinningLine('row2');
        return true;
      }
    }
    if(set.has(8)){
      if(set.has(2) && set.has(5)){
        setWinningLine('col3');
        return true;
      }
      if(set.has(6) && set.has(7)){
        setWinningLine('row3');
        return true;
      }
    }
    return false;
  }

  const handleWin = (player) => {
    switch (player){
      case 'X': 
        setIsCurrentPlayerX(null);
        setShowModal(true);
        setWinner('X');        
        break;
      case 'O':
        setIsCurrentPlayerX(null);
        setShowModal(true);
        setWinner('O');
        break;
      case 'Tie':
        setIsCurrentPlayerX(null);
        setShowModal(true);
        setWinner('Tie');
        break;
      default:
        break;
    }
    
  }

  const handleClick = (index) => {
    if(boardPlacement[index] !== ''){
      return;
    }
    if(isCurrentPlayerX == null) return;
    else if(isCurrentPlayerX){ 
      boardPlacement[index] = 'X'
      xPlacement.add(index);
      if(checkWinner(xPlacement)){
        handleWin('X');
        return;
      };
    }
    else { 
      boardPlacement[index] = 'O'
      oPlacement.add(index);
      if(checkWinner(oPlacement)){
        handleWin('O');
        return;
      };
    }
    if(!boardPlacement.includes('')){
      handleWin('Tie');
      return;
    }
    setIsCurrentPlayerX(!isCurrentPlayerX)
  }

  const hideModal = () => {
    setShowModal(false);
  }
  return (
    <>
      <Board boardPlacement={boardPlacement} handleClick={handleClick} winningLine={winningLine}/>
      <PlayerDisplay isCurrentPlayerX={isCurrentPlayerX}/>
      <Button onClick={reset}>Reset</Button>
      <GameEndModal showModal={showModal} hideModal={hideModal} reset={reset} winner={winner}/>
    </>
  )
}

export default Game
