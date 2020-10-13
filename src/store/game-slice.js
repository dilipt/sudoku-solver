import { createSlice } from '@reduxjs/toolkit';
import { Block } from '../model';

const gameSlice = createSlice({
  name: 'game',
  initialState: [
    [Block(), Block(), Block()],
    [Block(), Block(), Block()],
    [Block(), Block(), Block()],
  ],
  reducers: {
    setSquare(state, action) {
      const { x, y } = action;
      const newState = [...state];
      newState[x][y] = Block();
      return newState;
    },
  },
});

const { actions, reducer } = gameSlice;

export {
  actions,
  reducer,
};
