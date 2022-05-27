import React from 'react'
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'

const PlayerDisplay = ({isCurrentPlayerX}) => {
  return (
    <div className='d-flex justify-content-around m-4' style={{width: "300px"}} >
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip >
            {isCurrentPlayerX ? "It's your turn!" : "It's not your turn yet!"}
          </Tooltip>
        }
      >
        <Badge bg={`${isCurrentPlayerX ? 'primary' : 'secondary'}`} style={{fontSize: "30px"}}>
          X
        </Badge>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip >
            {isCurrentPlayerX ? "It's not your turn yet!" : "It's your turn!"}
          </Tooltip>
        }
      >
        <Badge bg={`${isCurrentPlayerX ? 'secondary' : 'primary'}`} style={{fontSize: "30px"}}>
          O
        </Badge>
      </OverlayTrigger>
      
      
    </div>
  )
}

export default PlayerDisplay
