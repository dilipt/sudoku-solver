import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Board } from './game';
import { store } from './store';
import { theme } from './theme';

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 80vw 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    ". header ."
    ". main .";
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Container>
          <Header>
            <h1>Sudoku Solver</h1>
          </Header>
          <Main>
            <Board />
          </Main>
        </Container>
      </Provider>
    </ThemeProvider>
  );
}
