import Swal2 from 'sweetalert2'

const MyAlert = {
    
    success: (params) => {

        Swal2.fire({
            icon: 'success',
            timer: 2000,
            title: 'Success',
            text: params.text
        })
    },
    error: (params) => {                
        Swal2.fire({
            icon: 'error',            
            title: 'Error',
            text: params.text
        })
    }
}

export default MyAlert;
