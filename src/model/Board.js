import { Square } from './Square';

const createBoard = () => {
  const board = [];
  for (let i = 0; i < 9; i += 1) {
    const row = [];
    for (let j = 0; j < 9; j += 1) {
      row.push(Square(''));
    }
    board.push(row);
  }
  return board;
};

export const Board = () => {
  const game = createBoard();

  console.log('constructing...', JSON.stringify(game));

  const getSquare = (row, col) => game[row][col];

  const setSquare = (row, col, value) => {
    (game[row][col]).setValue(value);
  };

  const getRow = (row) => game[row];

  const getColumn = (col) => game.map((row) => row[col]);

  const getBlock = () => null;

  return {
    getSquare,
    setSquare,
    getRow,
    getColumn,
    getBlock,
  };
};
