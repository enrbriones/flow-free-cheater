import { types } from '../types/types';
import {formatHeaders} from '../../helpers/scripts'
import { startLoading, finishLoading, setInfoMessage, setErrorMessage } from './uiActions';

// export const setMatrixElement = (x,y,value) => {
//     return (dispatch, getState)=>{
//         dispatch(setMatrix(x,y,value))
//     }
// }

export const setMatrixElement = (x, y, value) => ({
  type: types.boardSetElement,
  payload: {
    x,
    y,
    value,
  },
});

export const resetMatrix = () => ({
  type: types.boardReset,
});

export const changeMatrix = (matrix) => ({
  type: types.boardSolve,
  payload: matrix,
});

export const changeMatrixSize = (size) => ({
  type: types.boardChangeSize,
  payload: size,
});

export const setDefault = () => ({
  type: types.boardSetDefault
})

export const solve = () => {
  return async (dispatch, getState) => {
    const url = "http://localhost:4000/api/solve";
    // const url = `${process.env.REACT_APP_BACKEND_URL}/api/solve`
    // const url = `https://numberlink-solver.herokuapp.com/api/solve/`;
    // const url = `https://numberlink-solver.herokuapp.com/api/solve/github-pages`;
    dispatch(startLoading());
    const { matrix } = getState().board;
    const format = formatHeaders(matrix)

    dispatch(startLoading());

    await fetch(url, format)
      .then((data) => data.json())
      .then((mat) => {
        if (mat.solution) {
          dispatch(changeMatrix(mat.solution));
        }
        if (mat.error) {
          console.log('Error',mat.error);
          dispatch(setErrorMessage(mat.error))
        }
        
        if (mat.info) {
          console.log('Info',mat.info);
          dispatch(setInfoMessage(mat.info))
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setErrorMessage(error))
      })
      .finally(() => {
        dispatch(finishLoading());
      });
  };
};
