import React from 'react';
import { SizeDropdown } from './SizeDropdown';
import './Toolbar.css';
import { ResetButton } from './ResetButton';
import { SolveButton } from './SolveButton';
import { SetDefaultButton } from './SetDefaultButton';

export const ToolBar = () => {
  return (
    <div className='toolbar'>
      <div>
        <SizeDropdown />
        <SetDefaultButton />
        <ResetButton />
        <SolveButton />
      </div>
    </div>
  );
};
