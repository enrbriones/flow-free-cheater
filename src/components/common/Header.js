import React from 'react'
import {FaJsSquare} from 'react-icons/fa';

export const Header = () => {
    const titulo='Flow Free Cheater';
    return (
      <div className='text-center'>
        <h2 style={{color:'#dbdbdb'}} className='mt-4 mb-4'><FaJsSquare color='yellow'/> {titulo}</h2>
      </div>
    );
}
