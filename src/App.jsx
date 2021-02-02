import React from 'react';
import { Provider } from 'react-redux';
import { Board } from './game';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <header>
      <h1>Sudoku Solver</h1>
    </header>
    <main>
      <Board />
    </main>
  </Provider>
);

export default App;
