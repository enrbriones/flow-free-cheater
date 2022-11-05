import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Square } from './Square'
import './Board.css'
import { buildMatrix } from '../../helpers/scripts'

export const Board = () => {

    const {matrix, solved} = useSelector(state => state.board)

    const [connections, setConnections] = useState(buildMatrix(matrix.length, matrix[0].length, ''));

    useEffect(() => {
        setConnections(buildMatrix(matrix.length, matrix[0].length, ''));
    }, [matrix])

    const getColorsConnections = (matrix)=>{
      const result = buildMatrix(matrix.length, matrix[0].length);
      const validIndexRow = (index, matrix)=> index >= 0 && index < matrix.length;
      const validIndexCol = (index, matrix)=> index >= 0 && index < matrix[0].length;
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
          const cardinalPoints = {
            N: false,
            S: false,
            E: false,
            W: false,
          }

          cardinalPoints.N = validIndexRow(i-1,matrix) && matrix[i][j] === matrix[i-1][j];
          cardinalPoints.S = validIndexRow(i+1,matrix) && matrix[i][j] === matrix[i+1][j];
          cardinalPoints.E = validIndexCol(j+1,matrix) &&  matrix[i][j] === matrix[i][j+1];
          cardinalPoints.W = validIndexCol(j-1,matrix) && matrix[i][j] === matrix[i][j-1];

          const label = Object.entries(cardinalPoints).reduce((acc,[key,value])=> value? acc+key:acc ,'');
          result[i][j]= label;
        }
      }
      return result;   
    }
    useEffect(() => {
      if(solved){
        setConnections(getColorsConnections(matrix));
      }
    }, [solved, matrix])

    return (
        <div className='board'>
        {
          matrix.map((row, idxRow) =>
            row.map((value, idxCol) => (
              <Square
                key={[idxRow, idxCol]}
                xPos={idxRow}
                yPos={idxCol}
                currentValue={value}
                // dimension={dimension}
                {...(solved ? {className:connections[idxRow][idxCol]} : {})}
              ></Square>
            ))
          )
        }
        </div>
    )
}
