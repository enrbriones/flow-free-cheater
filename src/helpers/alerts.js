export const loadingAlertPleaseWait =(Swal)=>{
  loadingAlert(Swal, 'Solving...', 'Please wait to get the solution.')
}

export const loadingAlert =(Swal, title, html)=>{
  Swal.fire({
    title,
    html,
    allowOutsideClick: false,
    onBeforeOpen: () => {
      Swal.showLoading()
    }  
  })
}