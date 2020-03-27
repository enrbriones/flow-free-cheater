import React from 'react';
import { useDrag } from 'react-dnd'
import itemTypes from '../itemTypes'

// const style = {
//     border: '1px dashed gray',
//     backgroundColor: 'white',
//     padding: '0.5rem 1rem',
//     marginRight: '1.5rem',
//     marginBottom: '1.5rem',
//     cursor: 'move',
//     float: 'left',
//   }

const Nodo = ({color, setCasilla}) => {

    const [{ isDragging }, drag] = useDrag({
        item: { color, type: itemTypes.BOX },
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult()
          if (item && dropResult) {
              setCasilla(dropResult.xPos, dropResult.yPos, color.value);
            // alert(`You dropped ${color.value} into ${dropResult.name}!`)       
          }
        },
        collect: monitor => ({
          isDragging: monitor.isDragging(),
        }),
      })
      const opacity = isDragging ? 0.4 : 1
      const display = color.value===0?'none':'inherit';


    return (
    <span ref={drag} style={{ opacity, background:color.color, display }} className='dot'></span>
    );
};

export default Nodo;