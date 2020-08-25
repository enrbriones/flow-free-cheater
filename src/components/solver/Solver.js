import React from 'react';
import { Board } from './Board';
import { ToolBar } from './ToolBar';
import { ColorsPanel } from './ColorsPanel';
import './Solver.css'

export const Solver = () => {
  return (
    <div className='solver'>
      <ToolBar />
      <div style={{ display: 'flex' }}>
        <ColorsPanel />
        <Board />
      </div>
    </div>
  );
};
