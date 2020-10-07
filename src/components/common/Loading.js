import React from 'react'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import { loadingAlert, loadingAlertPleaseWait } from '../../helpers/alerts'
import { useSelector } from 'react-redux'

export const Loading = () => {

    const {loading} = useSelector(state => state.ui)
    const msg = process.env.REACT_APP_MESSAGE

    useEffect(() => {
        if(loading){ 
            loadingAlertPleaseWait(Swal)
        }else{
            Swal.close();
        }
    }, [loading, msg])

    return (
        <div>
            
        </div>
    )
}
