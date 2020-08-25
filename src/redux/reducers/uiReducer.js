import { types } from '../types/types';

const initialState = {
  loading: false,
  msgError: null,
  msgInfo: null
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };
    case types.uiSetErrorMessage:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.uiSetInfoMessage:
      return {
        ...state,
        msgInfo: action.payload,
      };
    default:
      return state;
  }
};
