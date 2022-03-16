const winnigMatrix = {
  0: [
    [1, 2],
    [3, 6],
    [4, 8],
  ],
  1: [
    [0, 2],
    [4, 7],
  ],
  2: [
    [0, 1],
    [4, 6],
    [5, 8],
  ],
  3: [
    [0, 6],
    [4, 5],
  ],
  4: [
    [3, 5],
    [1, 7],
    [0, 8],
    [2, 6],
  ],
  5: [
    [3, 4],
    [2, 8],
  ],
  6: [
    [0, 3],
    [4, 2],
    [7, 8],
  ],
  7: [
    [6, 8],
    [1, 4],
  ],
  8: [
    [0, 4],
    [5, 2],
    [7, 6],
  ],
};

const calculateWinner = (cellVal,newNumberOfTurn, cellIndex) => {
  const winnigRange = winnigMatrix[cellIndex];
for(let i = 0; i < winnigRange.length; i++){
  const currentValue =  cellVal[cellIndex];
  const firstOption = cellVal[winnigRange[i][0]];
  const secondOption = cellVal[winnigRange[i][1]];

  if(currentValue === firstOption && firstOption === secondOption){
    return{
      hasResult: true,
      winner: currentValue,
      winningCombination: [cellIndex, winnigRange[i][0], winnigRange[i][1]]
    }
  }
}
if(newNumberOfTurn === 0) {
  return {
    hasResult: true,
    winner: undefined,
    winningCombination: [],
  }
}

  return {
    hasResult: false,
    winner: undefined,
    winningCombination: [],
  };
};

export default calculateWinner;
