import { createSlice } from '@reduxjs/toolkit';

function createBoard() {
  const board = [];
  for (let i = 0; i < 81; i += 1) {
    board.push({ locked: false, value: '' });
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
      return {
        ...state,
        board: state.board.map((square, idx) => (
          action.payload.position !== idx ? square : {
            ...square,
            value: square.locked ? square.value : action.payload.value,
          })),
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
