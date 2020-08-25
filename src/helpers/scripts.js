
export const buildMatrix = (x, y) => {
    return Array(x)
      .fill()
      .map(() => Array(y).fill(0));
  };


  //TODO: Maybe I'll delete this method
  export const setMatrixElementImpl = (x, y, value, matrix) => {
    const matAux = [...matrix];
    matAux[x][y] = value;
    return matAux;
  };

export const formatHeaders = (matrix) => {
  const body = {
    matrix,
  };
  const format = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  return format;
}
