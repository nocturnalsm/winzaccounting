import Swal2 from 'sweetalert2'

const MyAlert = {

    success: (params) => {
        Swal2.fire({
            icon: 'success',
            timer: 2000,
            title: params.text,
            showConfirmButton: false,
            toast: true
        })
    },
    error: (params) => {
        Swal2.fire({
            icon: 'error',
            title: params.text,
            toast: true
        })
    },
    confirm: (params) => {
          Swal2.fire({
            title: params.title ?? 'Are you sure?',
            text: params.text ?? '',
            icon: params.icon ?? 'warning',
            showCancelButton: params.showCancel ?? true,
            confirmButtonColor: params.confirmButtonColor ?? '#3085d6',
            cancelButtonColor: params.cancelButtonColor ?? '#d33',
            confirmButtonText: params.confirmButtonText ?? 'Yes',
            cancelButtonText: params.cancelButtonText ?? 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
                params.confirmAction()
            }
            else if (result.isDenied){
                params.denyAction()
            }
          })
    }
}

export default MyAlert;
