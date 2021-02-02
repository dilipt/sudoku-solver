import { createSlice } from '@reduxjs/toolkit';

function createBoard() {
  const board = [];
  for (let i = 0; i < 81; i += 1) {
    board.push({ locked: false, value: null });
  }
  return board;
}

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    board: createBoard(),
  },
  reducers: {
    setSquare(state, action) {
      const newBoard = [...state.board];
      if (!newBoard[action.payload.position].locked) {
        newBoard[action.payload.position].value = action.payload.value;
      }
      return {
        board: newBoard,
      };
    },
  },
});

const { actions, reducer } = gameSlice;
const { setSquare } = actions;

export {
  setSquare,
  reducer,
};
