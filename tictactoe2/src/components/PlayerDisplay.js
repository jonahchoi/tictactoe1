import React from 'react'
import { Badge } from 'react-bootstrap'

const PlayerDisplay = ({isCurrentPlayerX}) => {
  return (
    <div className='d-flex justify-content-around m-4' style={{width: "300px"}} >
      <Badge bg={`${isCurrentPlayerX ? 'primary' : 'secondary'}`} style={{fontSize: "30px"}}>
        X
      </Badge>
      <Badge bg={`${isCurrentPlayerX ? 'secondary' : 'primary'}`} style={{fontSize: "30px"}}>
        O
      </Badge>
    </div>
  )
}

export default PlayerDisplay
