import React from 'react'

const row1 = {
  top: '100px',
  left: '50px',
  borderTop: '5px solid red'
}
const row2 = {
  top: '300px',
  left: '50px',
  borderTop: '5px solid red'
}
const row3 = {
  top: '500px',
  left: '50px',
  borderTop: '5px solid red'
}
const col1 = {
  top:'50px',
  left: '100px',
  borderLeft:'5px solid red'
}
const col2 = {
  top:'50px',
  left: '300px',
  borderLeft:'5px solid red'
}
const col3 = {
  top:'50px',
  left: '500px',
  borderLeft:'5px solid red'
}
const diag1 = {
  top:'225px',
  left: '-225px',
  borderTop:'5px solid red',
  transform: 'rotate(45deg)',
  width: '700px'
}
const diag2 = {
  top:'225px',
  left: '125px',
  borderTop:'5px solid red',
  transform: 'rotate(-45deg)',
  width: '700px'
}
const noLine = {
  display: 'none'
}


const CrossLine = ({winningLine}) => {
  let temp;

  switch (winningLine){
    case 'row1':
      temp = row1;
      break;
    case 'row2':
      temp = row2;
      break;
    case 'row3':
      temp = row3;
      break;
    case 'col1':
      temp = col1;
      break;
    case 'col2':
      temp = col2;
      break;
    case 'col3':
      temp = col3;
      break;
    case 'diag1':
      temp = diag1;
      break;
    case 'diag2':
      temp = diag2;
      break;
    default:
      temp = noLine;
  }

  return (
    <>
      <div 
        className="position-absolute pe-none" 
        style={{
          height: "500px", 
          width: "500px", 
          ...temp
        }} 
      />
    </>
  )
}

export default CrossLine
