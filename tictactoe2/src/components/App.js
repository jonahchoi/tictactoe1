import React from 'react'
import Game from './Game'

const App = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}}>
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  )
}

export default App

