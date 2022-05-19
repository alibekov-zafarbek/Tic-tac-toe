import { useState } from "react";
import Board from "./Board";
import Modal from "./Modal";
import calculateWinner from "./utils/WinnerCalc";

const Game = () => {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [numberOfTurn, setNumberOfTurn] = useState(9);
  const [winner, setWinner] = useState();
  // eslint-disable-next-line no-unused-vars
  const [winningCombination, setWinningCombination] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const winnerCombination = [];

  const isCellImpty = (cellIndex) => cellValues[cellIndex] === "";

  const cellClick = (cellIndex) => {
    if (isCellImpty(cellIndex)) {
      const newCellVal = [...cellValues];
      newCellVal[cellIndex] = xIsNext ? "X" : "O";

      const newNumberOfTurn = numberOfTurn - 1;

      const calcResult = calculateWinner(
        newCellVal,
        newNumberOfTurn,
        cellIndex
      );

      setCellValues(newCellVal);
      setXIsNext(!xIsNext);
      setGameOver(calcResult.hasResult);
      setNumberOfTurn(newNumberOfTurn);
      setWinner(calcResult.winner);
      setWinningCombination(calcResult.winningCombination);
    }
  };

  const onNewGame = () => {
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setXIsNext(true);
    setGameOver(false);
    setNumberOfTurn(9);
    setWinner(undefined);
    setWinningCombination([]);
  };

  return (
    <>
       <div className="logo">
         <span style={{'--i':'1'}}>T</span>
         <span style={{'--i':'2'}}>R</span>
         <span style={{'--i':'3'}}>Y</span>
       </div>
        <Board
          cellValues={cellValues}
          winnerCombination={winningCombination}
          cellClick={cellClick}
          winner={winner}
        />
      <Modal gameOver={gameOver} winner={winner} onNewGame={onNewGame} />
    </>
  );
};

export default Game;
