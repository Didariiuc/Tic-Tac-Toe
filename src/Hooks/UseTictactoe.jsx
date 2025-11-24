import React from 'react'
import { useState } from "react"
const initialBoard = () => Array(9).fill(null);

function UseTictactoe() {


   const [Board, setBoard] = useState(initialBoard());
    const [isXNext, setisXNext] = useState(true);



    const Winning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const calculateWinner = (currentBoard) =>
    {
      for(let i=0; i<Winning.length; i++)
      {
        const [a, b, c] = Winning[i];
        if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c])
        {
          return currentBoard[a];
        }
      }
      return null;
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
      const winner = calculateWinner(Board);
      if (winner) return `Winner: ${winner}`;
      if(!Board.includes(null)) return "It's a Draw!";
      return `Next Player: ${isXNext ? 'X' : 'O'}`;
    }
    const resetGame = () =>
    {
      setBoard(initialBoard());
      setisXNext(true);
    }


  return (
    
      {Board, handleClick, isXNext, Winning, getStatusMessage, resetGame}
    
  )
}

export default UseTictactoe
