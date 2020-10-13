import { Board } from './Board';

describe('sudoku board tests', () => {
  it('should set and get squares on the board', () => {
    const board = Board();
    board.setSquare(4, 4, 1);

    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 9; j += 1) {
        if (i === 4 && j === 4) {
          expect(board.getSquare(i, j).getValue()).toEqual(1);
        } else {
          expect(board.getSquare(i, j).getValue()).toBeFalsy();
        }
      }
    }
  });
});
