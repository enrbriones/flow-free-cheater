import React from 'react';
import { useDrop } from 'react-dnd'
import itemTypes from '../itemTypes'
import Nodo from './Nodo'
import colores from '../colores';

const Casilla = (props) => {

    // const [contador,setContador]=useState(1);
    const {children,setCasilla, xPos, yPos, currentValue, dimension}= props;
    const base = (500/dimension[0]);

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: itemTypes.BOX,
        drop: () => ({ name: `${xPos},${yPos}`,
        xPos,yPos
     }),
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })

      const isActive = canDrop && isOver
      let backgroundColor = 'black'
      if (isActive) {
        backgroundColor = '#424242'
      } 


    const setColorNodo = ()=>{
        const obj = Object.keys(colores).filter(x=>colores[x].value===currentValue)
        return colores[obj]
    }
  

    return (
        <div className='casilla' ref={drop} onClick={()=>{setCasilla(xPos,yPos,0)}}
        style={{backgroundColor,
         width:`${base}px`, height:`${base}px`}}>
            {children}
            <Nodo color={setColorNodo()} setCasilla={setCasilla} /> 
        </div>
    );
};

export default Casilla;