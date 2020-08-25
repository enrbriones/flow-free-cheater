import React from 'react';
import { Button } from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { solve } from '../../redux/actions/boardActions';

export const SolveButton = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);
  const { solved } = useSelector((state) => state.board);

  const handleClick = () => {
    dispatch(solve());
  };

  return (
    <Button
      classes='btn btn-success'
      handleClick={handleClick}
      disabled={loading || solved}
    >
      SOLVE BOARD
    </Button>
  );
};
