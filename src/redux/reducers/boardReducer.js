import { types } from '../types/types';
import { buildMatrix } from '../../helpers/scripts';

// This library help us with inmutability for setting the matrix.
//More info in: https://github.com/kolodny/immutability-helper
import update from 'immutability-helper';
import puzzles from '../../helpers/puzzles';

const initialState = {
  matrix: buildMatrix(5, 5),
  solved:false
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.boardSetElement:
      const {x,y,value}= action.payload
      return {
        ...state,
        matrix: update(state.matrix, {
          [x]: {
            [y]: {
              $set: value,
            },
          },
        }),
      };
    case types.boardReset:
      const { length:rows, 0:{length:cols},}=state.matrix;
      return {
       ...state,
       solved:false,
       matrix:buildMatrix(rows,cols)
      };
    case types.boardSolve:
      return {
       ...state,
       matrix:action.payload,
       solved: true
      };
    case types.boardChangeSize:
      const size = action.payload
      return {
       ...state,
       solved:false,
       matrix:buildMatrix(size,size)
      };
    case types.boardSetDefault:
      const {length} = state.matrix
      return {
       ...state,
       solved:false,
       matrix: puzzles[`p${length}`]
      };
    default:
      return state;
  }
};
