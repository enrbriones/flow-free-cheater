import React,{useState, useEffect} from "react";
import Swal from 'sweetalert2'
import puzzles from '../puzzles';
import {MdRefresh} from 'react-icons/md';

const PanelAcciones = ({ matrix, changeMatrix, resetMatrix, esMatrixInicial, estaResuelto, resuelto, setResuelto }) => {

  const [disabled,setDisabled]= useState(true);
  // const url = "http://localhost:3001/api/solve";
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/solve`
  const body = {
    matrix
  };

  const format = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };

  const resolver = async () => {
    loading();
    await fetch(url, format)
      .then(data => data.json())
      .then(mat => {
        Swal.close();
        if(mat.solution){
          changeMatrix(mat.solution);
          setResuelto(true);
        }

        if(mat.error){
          Swal.fire('Error',mat.error,'error');
        }

        if(mat.info){
          Swal.fire(mat.info,'','info');
        }
      })
      .catch(error => {
        Swal.close();
        Swal.fire('Error',error,'error');
        // console.log(error)
      });
      
  };

  const loading =()=>{
    Swal.fire({
      title: 'Solving...',
      html: 'Please wait to get the solution.',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    
    })
  }

  const setDefault=()=>{
    const large = matrix.length;
    changeMatrix(puzzles[`p${large}`])
  }

  useEffect(()=>{
    setDisabled((esMatrixInicial()||resuelto) )
  },[esMatrixInicial, resuelto])


  return (
    <div>
      <button className='btn btn-outline-light  mr-2' onClick={() => setDefault()}>Set Default</button>
      <button className='btn btn-outline-light  mr-2' onClick={() => resetMatrix()}><MdRefresh size='20px' style={{paddingBottom:'2px'}}/>Reset</button>
      <button className='btn btn-success ' onClick={() => resolver()} disabled={disabled}>SOLVE BOARD</button>
    </div>
  );
};

export default PanelAcciones;
