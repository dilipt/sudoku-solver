import { configureStore } from '@reduxjs/toolkit';
import { reducer as gameReducer } from './game-slice';

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export {
  store,
};
