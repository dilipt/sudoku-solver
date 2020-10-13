import { Block } from './Block';

const blockAt = (n) => Math.floor(n / 3);

const squareAt = (n) => n % 3;

export const Board = () => {
  const board = [
    [Block(), Block(), Block()],
    [Block(), Block(), Block()],
    [Block(), Block(), Block()],
  ];

  const getBlock = (row, col) => board[row][col];

  const getRow = (row) => board[row].map((boardRow) => boardRow.getRow());

  const getColumn = (col) => board[col];

  const getSquare = (row, col) => board[blockAt(row)][blockAt(col)]
    .getSquare(squareAt(row), squareAt(col));

  const setSquare = (row, col, value) => {
    board[blockAt(row)][blockAt(col)]
      .setSquare(squareAt(row), squareAt(col), value);
  };

  return {
    getSquare,
    getBlock,
    getRow,
    getColumn,
    setSquare,
  };
};
