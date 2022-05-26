import React, { useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'

const columnClass = 'd-flex flex-column justify-content-center'
const columnClassEndBottom = 'd-flex flex-column justify-content-center border-2 border-dark border-end border-bottom'
const columnClassBottom = 'd-flex flex-column justify-content-center border-2 border-dark border-bottom'
const columnClassEnd = 'd-flex flex-column justify-content-center border-2 border-dark border-end'

const Board = () => {
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
    console.log(boardPlacement);
    if(player === 'x'){
      console.log('x wins');
    }
    else{
      console.log('o wins');
    }
  }

  const handleClick = (index) => {
    if(boardPlacement[index] !== ''){
      return;
    }
    
    if(isCurrentPlayerX){ 
      boardPlacement[index] = 'x'
      xPlacement.add(index);
      if(checkWinner(xPlacement)){
        handleWin('x');
      };
    }
    else{ 
      boardPlacement[index] = 'o'
      oPlacement.add(index);
      if(checkWinner(oPlacement)){
        handleWin('o');
      };
    }
    setIsCurrentPlayerX(!isCurrentPlayerX)
  }

  return (
    <Container className="text-center" style={{height: "600px", width: "600px"}}>
      <Row style={{height: '200px'}}>
        <Col onClick={()=> handleClick(0)} className={columnClassEndBottom}>{boardPlacement[0]}</Col>
        <Col onClick={()=> handleClick(1)} className={columnClassEndBottom}>{boardPlacement[1]}</Col>
        <Col onClick={()=> handleClick(2)} className={columnClassBottom}>{boardPlacement[2]}</Col>
      </Row>
      <Row style={{height: '200px'}}>
        <Col onClick={()=> handleClick(3)} className={columnClassEndBottom}>{boardPlacement[3]}</Col>
        <Col onClick={()=> handleClick(4)} className={columnClassEndBottom}>{boardPlacement[4]}</Col>
        <Col onClick={()=> handleClick(5)} className={columnClassBottom}>{boardPlacement[5]}</Col>
      </Row>
      <Row style={{height: '200px'}}>
        <Col onClick={()=> handleClick(6)} className={columnClassEnd}>{boardPlacement[6]}</Col>
        <Col onClick={()=> handleClick(7)} className={columnClassEnd}>{boardPlacement[7]}</Col>
        <Col onClick={()=> handleClick(8)} className={columnClass}>{boardPlacement[8]}</Col>
      </Row>
      <Button onClick={reset}>Reset</Button>
    </Container>
    
  )
}

export default Board
