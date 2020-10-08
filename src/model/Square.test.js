import { Square } from './Square';

describe('Sudoku square tests', () => {
  it('should create a square with a value', () => {
    const s = Square(5);
    expect(s.getValue()).toEqual(5);
  });

  it('should allow changing of value if unlocked', () => {
    const s = Square(1);
    s.setValue(5);
    expect(s.getValue()).toEqual(5);
  });

  it('should not allow editing of value if locked', () => {
    const s = Square(5);
    s.lock();
    s.setValue(6);
    expect(s.getValue()).toEqual(5);
  });
});
