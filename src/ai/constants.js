const emptyValue = 0;
const xValue = 1;
const oValue = -1;

const winValue = 1;
const loseValue = -1;

const initialScore = {
  x: 0,
  o: 0
};

const initialBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const initialGame = {
  board: initialBoard,
  ended: false,
  started: false,
  lastMove: null,
  winners: null
};

export {
  initialBoard,
  initialGame,
  
  emptyValue,
  xValue,
  oValue,

  winValue,
  loseValue,

  initialScore
};
