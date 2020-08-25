import React from 'react'
import colors from '../../helpers/colors';
import './ColorsPanel.css'
import { useSelector } from 'react-redux';
import { CircleContainer } from './CircleContainer';

export const ColorsPanel = () => {

    const {solved} = useSelector(state => state.board)

    return (
        <div className='colors-panel' style={{visibility: (solved?'hidden':'inherit')}}>
        {
          Object.keys(colors).map((col)=>(
            <CircleContainer key={col} value={colors[col].value} />
          ))
        }
    </div>
    )
}
