import React from 'react'
import { useState } from "react"
const initialBoard = () => Array(9).fill(null);

function UseTictactoe() {


   const [Board, setBoard] = useState(initialBoard());
    const [isXNext, setisXNext] = useState(true);



    const Winning = [];

    const calculateWinner = (currentBoard) =>
    {

    }

    const handleClick = (index) =>
    {
      const winner = calculateWinner(Board );
      if (winner || Board[index]) return;
      const newBoard = [...Board];
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setisXNext(!isXNext);
    }
    const getStatusMessage = () =>
    {

    }
    const resetGame = () =>
    {

    }


  return (
    
      {Board, handleClick, isXNext, Winning, getStatusMessage, resetGame}
    
  )
}

export default UseTictactoe
