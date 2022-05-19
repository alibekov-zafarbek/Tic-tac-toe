import React from "react";
import classNames from "classnames";

const Cell = (props) => {
  const cellClasses = classNames({
    cell: true,
    winner: props.highlight
  })
  const cellContentClasses = classNames({
    "cell-content": true,
    populated: props.value
  })

 
  return (
    <button className={cellClasses} onClick={ props.showCase}>
      <span style={{color: props.value === props.wincolor ? '#ffffffff' : "#FFDE03FF" }} className={cellContentClasses}>{props.value}</span>
    </button>
  );
};

export default Cell;
