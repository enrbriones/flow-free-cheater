import React from 'react';
import './Square.css';
import { setMatrixElement } from '../../redux/actions/boardActions';
import { useDispatch, useSelector } from 'react-redux';
import { Circle } from './Circle';

import { useDrop } from 'react-dnd';
import itemTypes from '../../helpers/itemTypes';

export const Square = ({ xPos, yPos, currentValue, className, children }) => {
  const {
    length: rows,
    0: { length: cols },
  } = useSelector((state) => state.board.matrix);
  const dispatch = useDispatch();
  const boardPixelsSize = 500;

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: itemTypes.BOX,
    drop: () => ({ name: `${xPos},${yPos}`, xPos, yPos }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  let backgroundColor = 'black';
  if (isActive) {
    backgroundColor = '#424242';
  }

  return (
    <div
      className='square'
      ref={drop}
      style={{
        backgroundColor,
        width: boardPixelsSize / rows,
        height: boardPixelsSize / cols,
      }}
      onClick={() => dispatch(setMatrixElement(xPos, yPos, 0))}
    >
      {/* {children} */}
      <Circle value={currentValue} className={className} />
    </div>
  );
};
