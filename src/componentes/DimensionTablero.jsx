import React from 'react';

const DimensionTablero = ({matrix,setMatrixByCoords}) => {

    const handleChange =(e)=>{
        const num = parseInt(e.target.value)
        setMatrixByCoords(num,num);
    }

    return (
        <div >
            <select onChange={(e)=> handleChange(e)}
             className='form-control mr-3' style={{width:'150px'}}>
                <option value={5}>5x5</option>
                <option value={6}>6x6</option>
                <option value={7}>7x7</option>
                <option value={8}>8x8</option>
                <option value={9}>9x9</option>
                <option value={10}>10x10</option>
            </select>
        </div>
    );
};

export default DimensionTablero;