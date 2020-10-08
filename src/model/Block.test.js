import { Block } from './Block';

describe('tests for sudoku block, aka one 9-square section', () => {
  it('should set squares on a block', () => {
    const b = Block();
    b.setSquare(0, 0, 2);
    b.setSquare(1, 1, 1);
    expect(b.getSquare(0, 0).getValue()).toEqual(2);
    expect(b.getSquare(1, 1).getValue()).toEqual(1);
    expect(b.isComplete()).toEqual(false);
  });

  it('should not allow setting of same value on different square', () => {
    const b = Block();
    b.setSquare(1, 1, 5);
    b.setSquare(2, 2, 5);
    expect(b.getSquare(1, 1).getValue()).toEqual(5);
    expect(b.getSquare(2, 2).getValue()).toEqual(undefined);
  });

  it('should be complete if all squares are unique and filled', () => {
    const b = Block();
    b.setSquare(0, 0, 9);
    b.setSquare(0, 1, 8);
    b.setSquare(0, 2, 7);
    b.setSquare(1, 0, 6);
    b.setSquare(1, 1, 5);
    b.setSquare(1, 2, 4);
    b.setSquare(2, 0, 3);
    b.setSquare(2, 1, 2);
    b.setSquare(2, 2, 1);
    expect(b.isComplete()).toEqual(true);
  });
});
