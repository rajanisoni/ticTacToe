import React, { useState } from 'react';
import ScoreBoard from './Components/ScoreBoard.js';
import Board from './Components/Board.js';
import Reset from './Components/Reset.js';
import './style.css';
import './style.css';

export default function App() {
  const [SquareArr, setSquareArr] = useState(Array(9).fill(null));
  const [xPlaying, setxPlaying] = React.useState(true);
  const [xWinner, setxWinner] = React.useState(0);
  const [oWinner, setoWinner] = React.useState(0);
  const [winMessage, setwinMessage] = React.useState('');
  const [gameOver, setgameOver] = React.useState(false);

  function handleClick(ClickedBoxIdx) {
    const updatedArr = SquareArr.map((elem, elemInd) => {
      if (ClickedBoxIdx == elemInd) {
        return xPlaying === true ? 'X' : 'O';
      } else {
        return elem;
      }
    });
    setxPlaying(!xPlaying);
    setSquareArr(updatedArr);

    function checkWinner(SquareArr) {
      const winIndexes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < winIndexes.length; i++) {
        const [I1, I2, I3] = winIndexes[i];
        if (
          SquareArr[I1] &&
          SquareArr[I1] === SquareArr[I2] &&
          SquareArr[I2] === SquareArr[I3]
        ) {
          setgameOver(true);
          console.log(SquareArr[I1]);
          return SquareArr[I1];
        }
      }
    }

    const winner = checkWinner(updatedArr);

    if (winner === 'X') {
      setwinMessage('X Won ');
      return setxWinner(xWinner + 1);
    } else if (winner === 'O') {
      setwinMessage('O Won ');
      return setoWinner(oWinner + 1);
    }
  }

  function resetBoard() {
    setgameOver(false);
    setwinMessage('');
    setSquareArr(Array(9).fill(null));
  }

  return (
    <div>
      <ScoreBoard xScore={xWinner} oScore={oWinner} xPlaying={xPlaying} />
      <Board array={SquareArr} onClick={handleClick} over={gameOver} />
      <Reset resetFun={resetBoard} message={winMessage} />
    </div>
  );
}
