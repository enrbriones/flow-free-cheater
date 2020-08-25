import React from 'react'
import {FaGithub } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className='mt-3 text-center'>
          <p>Created by <a className='h5 text-primary' href='https://github.com/enrbriones' target='blank'>enrbriones</a> - <a className='h5' href='https://github.com/enrbriones/numberlink-solver-apirest' target='blank'><span><FaGithub size='30px'/></span> View GitHub project</a></p>  
        </div> 
    );
}
