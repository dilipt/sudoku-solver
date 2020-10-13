import { Square } from './Square';

const completeBlock = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]);

export const Block = () => {
  const grid = [
    [Square(), Square(), Square()],
    [Square(), Square(), Square()],
    [Square(), Square(), Square()],
  ];

  const allValues = () => grid.flat().map((sq) => sq.getValue());

  const getSquare = (row, col) => grid[row][col];

  const setSquare = (row, col, value) => {
    if (allValues().find((n) => n === value) === undefined) {
      grid[row][col].setValue(value);
    }
  };

  const getRow = (row) => grid[row];

  const getColumn = (col) => grid.reduce((arr, row) => [...arr, row[col]], []);

  const isComplete = () => JSON.stringify(allValues().sort((a, b) => (a - b))) === completeBlock;

  return {
    getSquare,
    setSquare,
    getRow,
    getColumn,
    isComplete,
  };
};
