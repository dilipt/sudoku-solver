/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Square } from './Square';
import { gameStarted, boardCleared } from '../store';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 36px;
  }
`;

const StyledBoard = styled.section`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
    "sq sq sq sq sq sq sq sq sq"
    "sq sq sq sq sq sq sq sq sq"
    "sq sq sq sq sq sq sq sq sq"
    "sq sq sq sq sq sq sq sq sq"
    "sq sq sq sq sq sq sq sq sq"
    "sq sq sq sq sq sq sq sq sq"
    "sq sq sq sq sq sq sq sq sq"
    "sq sq sq sq sq sq sq sq sq"
    "sq sq sq sq sq sq sq sq sq";
`;

const Button = styled.button.attrs({ type: 'button' })`
  width: 200px;
  background-color: ${(props) => props.theme.DARK_CORNFLOWER_BLUE};
  color: hsl(0, 0%, 100%, 0.85);
  border: none;
  border-radius: 3px;
  font-size: 16px;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background-color: hsla(219, 49%, 34%, 0.9);
  }
  &:active {
    background-color: ${(props) => props.theme.DARK_CORNFLOWER_BLUE};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export function Board() {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.game.board);

  return (
    <Container>
      <StyledBoard>
        {board.map((square, idx) => <Square position={idx} key={idx} />)}
      </StyledBoard>
      <ButtonContainer>
        <Button onClick={() => dispatch(gameStarted())}>Start game</Button>
        <Button onClick={() => dispatch(boardCleared())}>Clear all</Button>
      </ButtonContainer>

    </Container>
  );
}
