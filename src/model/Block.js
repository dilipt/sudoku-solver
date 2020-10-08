import { Square } from './Square';

const completeBlock = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]);

export const Block = () => {
  const grid = [
    [Square(), Square(), Square()],
    [Square(), Square(), Square()],
    [Square(), Square(), Square()],
  ];

  function allValues() {
    return grid.flat().map((sq) => sq.getValue());
  }

  function setSquare(row, col, value) {
    if (allValues().find((n) => n === value) === undefined) {
      grid[row][col].setValue(value);
    }
  }

  function getSquare(row, col) {
    return grid[row][col];
  }

  function isComplete() {
    const values = allValues().sort((a, b) => (a - b));
    return JSON.stringify(values) === completeBlock;
  }

  return {
    getSquare,
    setSquare,
    isComplete,
  };
};
