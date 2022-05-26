import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const columnClass = 'd-flex flex-column justify-content-center'
const columnClassEndBottom = 'd-flex flex-column justify-content-center border-2 border-dark border-end border-bottom'
const columnClassBottom = 'd-flex flex-column justify-content-center border-2 border-dark border-bottom'
const columnClassEnd = 'd-flex flex-column justify-content-center border-2 border-dark border-end'

const Board = ({handleClick, showModal, boardPlacement}) => {
  
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
    </Container>
    
  )
}

export default Board
