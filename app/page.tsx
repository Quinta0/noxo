"use client"

import { useState, useEffect } from 'react'

export default function Component() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState<boolean>(true)
  const [winner, setWinner] = useState<string | null>(null)
  const [isDraw, setIsDraw] = useState<boolean>(false)

  const checkWinner = (squares: (string | null)[]): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const checkDraw = (squares: (string | null)[]): boolean => {
    return squares.every(square => square !== null)
  }

  const handleClick = (index: number): void => {
    if (board[index] || winner || isDraw) return
    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'
    setBoard(newBoard)
    setIsXNext(!isXNext)
  }

  useEffect(() => {
    const newWinner = checkWinner(board)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkDraw(board)) {
      setIsDraw(true)
    }
  }, [board])

  const resultMessage = (): string | null => {
    if (winner) {
      return `${winner} wins!`
    } else if (isDraw) {
      return "It's a draw!"
    }
    return null
  }

  return (
      <div>
        {(winner || isDraw) && (
            <div className="text-3xl font-bold my-8 mx-4 bg-background rounded-lg shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] p-4 align-middle justify-center flex items-center">
              {resultMessage()}
            </div>
        )}
        <div className="flex flex-col items-center justify-center bg-background mt-24">
          <div className="bg-background rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8">
            <div className="grid grid-cols-3 gap-4">
              {board.map((cell, index) => (
                  <div
                      key={index}
                      className="w-20 h-20 bg-background rounded-lg shadow-[10px_10px_30px_#bebebe,-10px_-10px_30px_#ffffff] flex items-center justify-center text-5xl font-bold text-primary cursor-pointer overflow-hidden"
                      onClick={() => handleClick(index)}
                  >
                    {cell && (
                        <span className="animate-rise inline-block w-16 h-16 flex items-center justify-center bg-background rounded-lg shadow-[inset_5px_5px_15px_#bebebe,inset_-5px_-5px_15px_#ffffff]">
                    {cell}
                  </span>
                    )}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
