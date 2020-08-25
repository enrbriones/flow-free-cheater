import React from 'react'
import {FaJsSquare} from 'react-icons/fa';

export const Header = () => {
    const titulo='Flow Free Cheater';
    return (
      <div className='text-center'>
        <h2 style={{color:'#dbdbdb', margin:'0px'}} className='mt-1'><FaJsSquare color='yellow'/> {titulo}</h2>
        <h3 style={{fontSize:'12px', fontWeight:'400', color:'#c3c3c3'}}>A Numberlink Solver</h3>
      </div>
    );
}
