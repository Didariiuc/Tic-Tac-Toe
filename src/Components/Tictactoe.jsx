import { useState } from "react"
import UseTictactoe from "../Hooks/UseTictactoe"

function Tictactoe() {
  const { Board, handleClick, isXNext, Winning, getStatusMessage, resetGame } = UseTictactoe()

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
      <div className="p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-[#1f1c2c] to-[#928dab] border border-purple-400/30 backdrop-blur-lg transition-transform hover:scale-[1.02]">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold text-white drop-shadow-lg tracking-wide">
            {getStatusMessage()}
          </div>

          <button
            onClick={resetGame}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg shadow-md transition active:scale-95 border border-red-400"
          >
            Reset Game
          </button>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-4">
          {Board.map((b, index) => (
            <button
              onClick={() => handleClick(index)}
              key={index}
              disabled={b !== null}
              className="w-24 h-24 bg-gray-900 border-2 border-gray-600 flex items-center justify-center text-4xl font-extrabold rounded-xl shadow-lg text-white tracking-wider hover:bg-gray-700 disabled:opacity-60 disabled:cursor-not-allowed transition transform hover:scale-105 active:scale-95"
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
