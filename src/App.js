import React, { useState } from "react";
import Tablero from "./componentes/Tablero";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import PanelColores from "./componentes/PanelColores";
import PanelAcciones from "./componentes/PanelAcciones";
import Header from "./componentes/Header";
import DimensionTablero from "./componentes/DimensionTablero";
import Footer from "./componentes/Footer";

function App() {

  // console.log('variable: ',process.env.REACT_APP_BACKEND_URL)
  //

  const buildMatrix = (x, y) => {
    return Array(x)
      .fill()
      .map(() => Array(y).fill(0));
  };

  const [matrix, setMatrix] = useState(buildMatrix(5, 5));
  const [dimension, setDimension] = useState([matrix.length, matrix[0].length]);
  const [resuelto, setResuelto] = useState(false);

  const setCasilla = (x, y, value) => {
    const matAux = [...matrix];
    matAux[x][y] = value;
    setMatrix(matAux);
    setResuelto(estaResuelto());
  };

  const changeMatrix = mat => {
    setMatrix(mat);
    setResuelto(false);
  };

  const setMatrixByCoords = (x, y) => {
    setMatrix(buildMatrix(x, y));
    setDimension([x, y]);
    setResuelto(false);
  };

  const resetMatrix = () => {
    setMatrix(buildMatrix(dimension[0], dimension[1]));
    setResuelto(false);
  };

  const esMatrixInicial = () => {
    let soloCeros = [].concat(...matrix).every(x => x === 0);
    return soloCeros;
  };

  const estaResuelto = () => {
    let res = [].concat(...matrix).every(x => x !== 0);
    return res;
  };

  return (
    <DndProvider backend={Backend}>
      <div className="container text-center">
        <Header />
        <div
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "670px",
            margin: "0 auto"
          }}
        >
          <DimensionTablero
            matrix={matrix}
            setMatrixByCoords={setMatrixByCoords}
          />
          <PanelAcciones
            matrix={matrix}
            changeMatrix={changeMatrix}
            resetMatrix={resetMatrix}
            esMatrixInicial={esMatrixInicial}
            estaResuelto={estaResuelto}
            resuelto={resuelto}
            setResuelto={setResuelto}
          />
        </div>
        <div className="row text-center d-flex justify-content-center">
          <PanelColores setCasilla={setCasilla} />
          <Tablero
            matrix={matrix}
            setCasilla={setCasilla}
            dimension={dimension}
          />
        </div>
        <Footer />
      </div>
    </DndProvider>
  );
}

export default App;
