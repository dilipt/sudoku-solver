import { Square } from './Square';

export function Block() {
  const grid = [
    [new Square(), new Square(), new Square()],
    [new Square(), new Square(), new Square()],
    [new Square(), new Square(), new Square()],
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
    const matcher = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return JSON.stringify(values) === JSON.stringify(matcher);
  }

  return {
    getSquare,
    setSquare,
    isComplete,
  };
}
