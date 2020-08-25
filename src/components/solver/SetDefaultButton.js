import React from 'react'
import { Button } from '../common/Button'
import { useDispatch } from 'react-redux'
import { setDefault } from '../../redux/actions/boardActions'

export const SetDefaultButton = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setDefault())
    }

    return (
    <Button classes='btn btn-outline-light  mr-2'
        handleClick={handleClick}
    >
        Set Default
    </Button>
        )

}
