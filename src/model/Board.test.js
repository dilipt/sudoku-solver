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
          expect(board.getSquare(i, j).getValue()).toEqual(null);
        }
      }
    }
  });

  // it('should return set and get blocks on board', () => {
  //   const board = Board();
  //   board.setSquare(0, 0, 1);
  //   board.setSquare(1, 1, 2);
  //   board.setSquare(2, 2, 3);
  //   board.setSquare(6, 7, 8);

  //   const block0 = board.getBlock(0, 0);
  //   expect(block0.getSquare(0, 0).getValue()).toEqual(1);
  //   expect(block0.getSquare(1, 1).getValue()).toEqual(2);
  //   expect(block0.getSquare(2, 2).getValue()).toEqual(3);

  //   const block8 = board.getBlock(2, 2);
  //   expect(block8.getSquare(0, 1).getValue()).toEqual(8);
  // });

  it('should return nth row on board', () => {
    let board = Board();
    board.setSquare(1, 0, 3);
    board.setSquare(1, 1, 4);
    board.setSquare(1, 2, 6);
    board.setSquare(1, 3, 7);
    board.setSquare(1, 4, 8);
    board.setSquare(1, 5, 2);
    board.setSquare(1, 6, 1);
    board.setSquare(1, 7, 9);
    board.setSquare(1, 8, 5);

    expect(board.getRow(1).map((sq) => sq.getValue())).toEqual([3, 4, 6, 7, 8, 2, 1, 9, 5]);

    board = Board();
    board.setSquare(4, 0, 4);
    board.setSquare(4, 1, 2);
    board.setSquare(4, 2, 1);
    board.setSquare(4, 3, 6);
    board.setSquare(4, 4, 5);
    board.setSquare(4, 5, 8);
    board.setSquare(4, 6, 3);
    board.setSquare(4, 7, 9);
    board.setSquare(4, 8, 7);

    expect(board.getRow(4).map((sq) => sq.getValue())).toEqual([4, 2, 1, 6, 5, 8, 3, 9, 7]);
  });

  it('should return nth column on board', () => {
    let board = Board();
    board.setSquare(0, 6, 3);
    board.setSquare(1, 6, 2);
    board.setSquare(2, 6, 1);
    board.setSquare(3, 6, 9);
    board.setSquare(4, 6, 7);
    board.setSquare(5, 6, 5);
    board.setSquare(6, 6, 8);
    board.setSquare(7, 6, 4);
    board.setSquare(8, 6, 6);

    expect(board.getColumn(6).map((sq) => sq.getValue())).toEqual([3, 2, 1, 9, 7, 5, 8, 4, 6]);

    board = Board();
    board.setSquare(0, 8, 1);
    board.setSquare(1, 8, 2);
    board.setSquare(2, 8, 3);
    board.setSquare(3, 8, 4);
    board.setSquare(4, 8, 5);
    board.setSquare(5, 8, 6);
    board.setSquare(6, 8, 7);
    board.setSquare(7, 8, 8);
    board.setSquare(8, 8, 9);

    expect(board.getColumn(8).map((sq) => sq.getValue())).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
