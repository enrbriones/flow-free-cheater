import React from 'react'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import { loadingAlert } from '../../helpers/alerts'
import { useSelector } from 'react-redux'

export const Loading = () => {

    const {loading} = useSelector(state => state.ui)

    useEffect(() => {
        if(loading){ 
            loadingAlert(Swal)
        }else{
            Swal.close();
        }
    }, [loading])

    return (
        <div>
            
        </div>
    )
}
