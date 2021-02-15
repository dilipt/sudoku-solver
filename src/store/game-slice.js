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
    gameStarted(state) {
      return {
        ...state,
        board: state.board.map((square) => ({
          ...square,
          locked: !!square.value,
        })),
      };
    },
    squareUpdated(state, action) {
      return {
        ...state,
        board: state.board.map((square, idx) => (
          action.payload.position !== idx ? square : {
            ...square,
            value: square.locked ? square.value : action.payload.value,
          })),
      };
    },
    boardCleared(state) {
      return {
        ...state,
        board: state.board.map((square) => ({
          ...square,
          value: square.locked ? square.value : '',
        })),
      };
    },
    gameRestarted(state) {
      return {
        ...state,
        board: createBoard(),
      };
    },
  },
});

const { actions, reducer } = gameSlice;
const {
  gameStarted, squareUpdated, boardCleared, gameRestarted,
} = actions;

export {
  gameStarted,
  squareUpdated,
  boardCleared,
  gameRestarted,
  reducer,
};
