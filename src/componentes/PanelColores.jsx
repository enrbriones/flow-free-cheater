import React from 'react';
import colores from '../colores'
import Nodo from './Nodo';

const PanelColores = ({setCasilla}) => {

    const largo=55;

    return (
        <div className='panelColores'>
            {
              Object.keys(colores).map(col=>(
                  <div key={col}
                   style={{width:`${largo}px`, height:`${largo}px`, display:colores[col].value===0?'none':'inherit'}}>
                      <Nodo color={colores[col]} setCasilla={setCasilla}/>  
                  </div>
              ))
            }
        </div>
    );
};

export default PanelColores;