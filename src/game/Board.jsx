import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Square } from './Square';

const StyledBoard = styled.section`
  width: ${40 * 10}px;
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

export function Board() {
  const board = useSelector((state) => state.game.board);

  return (
    <StyledBoard>
      {board.map((square, idx) => <Square position={idx} />)}
    </StyledBoard>
  );
}
