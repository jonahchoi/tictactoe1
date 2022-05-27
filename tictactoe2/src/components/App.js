import React from 'react'
import Game from './Game'

const App = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}}>
      <h1 className='m-5'>Tic Tac Toe</h1>
      <Game />
      <p className='text-center m-5'>Coded and Designed by <br/> Jonah Choi</p>
    </div>
  )
}

export default App

