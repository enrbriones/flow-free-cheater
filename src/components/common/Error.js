import React from 'react'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setErrorMessage, setInfoMessage } from '../../redux/actions/uiActions'

export const Error = () => {

    const {loading, msgError, msgInfo} = useSelector(state => state.ui)
    const dispatch = useDispatch()

    useEffect(() => {
        if(msgError!=null && !loading){ 
            Swal.fire('Error',msgError,'error');
            dispatch(setErrorMessage(null))
        }
        if(msgInfo!=null && !loading){ 
            Swal.fire('Info',msgInfo,'info');
            dispatch(setInfoMessage(null))
        }
    }, [msgError, msgInfo, loading, dispatch])

    return (
        <div>
            
        </div>
    )
}
