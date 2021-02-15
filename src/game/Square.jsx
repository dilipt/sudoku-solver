import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { squareUpdated } from '../store';

const StyledSquare = styled.input.attrs({ type: 'text' })`
  text-align: center;
  padding: 12px 20px;
  height: 60px;
  width: 60px;
  border: 1px solid dimgray;
  font-size: 16px;
  color: ${(props) => (props.locked ? props.theme.RUSSIAN_VIOLET : props.theme.DARK_CORNFLOWER_BLUE)};
  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.AERO};
  }
`;

const numberRegex = /^\d$/;

export function Square({ position }) {
  const dispatch = useDispatch();
  const square = useSelector((state) => state.game.board[position]);

  function valueChanged(e) {
    const updatedValue = e.target.value;
    if (numberRegex.test(updatedValue) && !square.locked) {
      dispatch(squareUpdated({ position, value: updatedValue }));
    }
  }

  function handleBackspace(e) {
    if (e.key === 'Backspace') {
      dispatch(squareUpdated({ position, value: '' }));
    }
  }

  return (
    <StyledSquare
      maxLength="1"
      value={square.value}
      onChange={valueChanged}
      onKeyDown={handleBackspace}
      locked={square.locked}
    />
  );
}
