export const loadingAlert =(Swal)=>{
  Swal.fire({
    title: 'Solving...',
    html: 'Please wait to get the solution.',
    allowOutsideClick: false,
    onBeforeOpen: () => {
      Swal.showLoading()
    }
  
  })
}