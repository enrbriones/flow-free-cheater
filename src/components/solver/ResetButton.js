import React from 'react';
import { Button } from '../common/Button';
import { useDispatch } from 'react-redux';
import { resetMatrix } from '../../redux/actions/boardActions';
import { MdRefresh } from 'react-icons/md';

export const ResetButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetMatrix());
  };

  return (
    <Button
      text={'Reset'}
      classes={'btn btn-outline-light  mr-2'}
      handleClick={handleClick}
    >
      <MdRefresh size='20px' style={{ paddingBottom: '2px' }} />
      Reset
    </Button>
  );
};
