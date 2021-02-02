import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setSquare } from '../store';

const StyledSquare = styled.input.attrs({ type: 'text' })`
  text-align: center;
  padding: 12px 20px;
  height: 60px;
  width: 60px;
`;

export function Square({ position }) {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.game.board);

  function valueUpdated(e) {
    dispatch(setSquare({ position, value: e.target.value }));
  }

  return (
    <StyledSquare maxLength="1" value={board[position.value]} onChange={valueUpdated} />
  );
}
