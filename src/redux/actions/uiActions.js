import { types } from '../types/types';

export const startLoading = () => ({
  type: types.uiStartLoading,
})

export const finishLoading = () => ({
  type: types.uiFinishLoading,
})

export const setErrorMessage = (message) => ({
  type: types.uiSetErrorMessage,
  payload: message
})

export const setInfoMessage = (message) => ({
  type: types.uiSetInfoMessage,
  payload: message
})