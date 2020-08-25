import React from 'react';
import colors from '../../helpers/colors';

import { useDrag } from 'react-dnd';
import itemTypes from '../../helpers/itemTypes';
import { setMatrixElement } from '../../redux/actions/boardActions';
import { useDispatch } from 'react-redux';
import './Circle.css'

export const Circle = ({ value }) => {
  const setColorNodo = () => {
    const obj = Object.keys(colors).filter((x) => colors[x].value === value);
    return colors[obj];
  };

  const dispatch = useDispatch();
  const color = setColorNodo();

  const [{ isDragging }, drag] = useDrag({
    item: { color, type: itemTypes.BOX },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const { xPos, yPos } = dropResult;
        dispatch(setMatrixElement(xPos, yPos, color.value));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;
  const display = color.value === 0 ? 'none' : 'inherit';

  return (
    <span
      className='dot'
      ref={drag}
      style={{ opacity, background: color.color, display }}
    ></span>
  );
};
