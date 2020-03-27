import React from "react";
import Casilla from "./Casilla";

const Tablero = props => {
  const { matrix, setCasilla, dimension} = props;

  const renderizar = () => {
    let resultado;
    if (matrix) {
      resultado = matrix.map((row, idx) =>
        row.map((col, idxCol) => (
          <Casilla
            key={[idx, idxCol]}
            setCasilla={setCasilla}
            xPos={idx}
            yPos={idxCol}
            currentValue={col}
            dimension={dimension}
          ></Casilla>
        ))
      );
    }
    return resultado;
  };

  return <div className="tablero">{renderizar()}</div>;
};

export default Tablero;
