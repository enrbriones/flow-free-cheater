import React from 'react';
import { Solver } from '../components/solver/Solver';
import './Main.css';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { Loading } from '../components/common/Loading';
import { Error } from '../components/common/Error';

export const Main = () => {
  return (
    <div className='main'>
      <Loading />
      <Error />
      <DndProvider backend={Backend}>
        <Solver />
      </DndProvider>
    </div>
  );
};
