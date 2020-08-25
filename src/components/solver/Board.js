import React from 'react'
import { useSelector } from 'react-redux'
import { Square } from './Square'
import './Board.css'

export const Board = () => {

    const {matrix} = useSelector(state => state.board)

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
              ></Square>
            ))
          )
        }
        </div>
    )
}
