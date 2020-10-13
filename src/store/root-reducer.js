import { combineReducers } from '@reduxjs/toolkit';
import { reducer } from './game-slice';

export const rootReducer = combineReducers({
  gameState: reducer,
});
