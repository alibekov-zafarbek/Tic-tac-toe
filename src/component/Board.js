import React from "react";
import Cell from "./Cell";

const Board = (props) => {
 

  return (
    <div id="board">
      {props.cellValues.map((val, idx) => {
        const isHighLight =
          props.winnerCombination && props.winnerCombination.indexOf(idx) >= 0;
        return (
          <Cell
            wincolor={props.winner}
            key={idx}
            value={val}
            highlight={isHighLight}
            showCase={() => props.cellClick(idx)}
          />
        );
      })}
    </div>
  );
};

export default Board;
