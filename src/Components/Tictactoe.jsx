import { useState } from "react"
import UseTictactoe from "../Hooks/UseTictactoe"



function Tictactoe() {
    
    const {Board, handleClick, isXNext, Winning, getStatusMessage, resetGame} = UseTictactoe()

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="p-6 rounded-lg shadow-lg bg-white">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-semibold text-gray-800">
            {getStatusMessage()}
          </div>

          <button
          onClick={resetGame}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition">
            Reset Game
          </button>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-3">
          {Board.map((b, index) => (
            <button

                onClick={() => handleClick(index)}
              key={index}
              disabled = {b !== null}
              className="w-24 h-24 bg-gray-200 border-2 border-gray-600 flex items-center justify-center text-3xl font-bold rounded-md hover:bg-gray-300 transition"
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tictactoe
