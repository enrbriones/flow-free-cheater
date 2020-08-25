import React from 'react';
import { Circle } from './Circle';

export const CircleContainer = ({value}) => {

  const boxSize = 55;

  return (
    <div
      style={{
        width: `${boxSize}px`,
        height: `${boxSize}px`,
        display: value === 0 ? 'none' : 'inherit',
      }}
    >
      <Circle value={value} />
    </div>
  );
};
