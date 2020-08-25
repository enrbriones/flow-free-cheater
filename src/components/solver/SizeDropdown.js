import React from 'react'
import { useDispatch } from 'react-redux'
import { changeMatrixSize } from '../../redux/actions/boardActions'

export const SizeDropdown = () => {

    const dispatch = useDispatch()

    const handleChange =(e)=>{
        e.preventDefault()
        const size = parseInt(e.target.value)
        dispatch(changeMatrixSize(size))
    }

    return (
        // <div >
        <select onChange={(e)=> handleChange(e)}
         className='form-control mr-3 d-inline' style={{width:'150px'}}>
            <option value={5}>5x5</option>
            <option value={6}>6x6</option>
            <option value={7}>7x7</option>
            <option value={8}>8x8</option>
            <option value={9}>9x9</option>
            <option value={10}>10x10</option>
        </select>
    // </div> *
    )
}
