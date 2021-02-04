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

const numberRegex = /^\d$/;

export function Square({ position }) {
  const dispatch = useDispatch();
  const square = useSelector((state) => state.game.board[position]);

  function valueChanged(e) {
    const updatedValue = e.target.value;
    if (numberRegex.test(updatedValue) && !square.locked) {
      dispatch(setSquare({ position, value: updatedValue }));
    } else {
      dispatch(setSquare({ position, value: square.value }));
    }
  }

  return (
    <StyledSquare
      type="text"
      maxLength="1"
      value={square.value}
      onChange={valueChanged}
    />
  );
}
