import {CButton, CButtonToolbar} from '@coreui/react';
import CIcon from '@coreui/icons-react';


const DTToolbarShow = (props) => {
    return (
        <CButton className="mr-2"
            color="success"                                        
            shape="square"
            size="sm"           
            disabled={props.disabled}                       
            >
            <CIcon name='cil-magnifying-glass' />
            <span className="d-none d-md-inline ml-2">Show</span>
        </CButton>
    )
}

const DTToolbarEdit = (props) => {
    return (
        <CButton className="mr-2"
            color="primary"                                        
            shape="square"
            size="sm"            
            disabled={props.disabled}                      
            >
            <CIcon name='cilPencil' />
            <span className="d-none d-md-inline ml-2">Edit</span>
        </CButton>
    )
}

const DTToolbarDelete = (props) => {
    return (
        <CButton className="mr-2"
            color="danger"                                        
            shape="square"
            size="sm"              
            disabled={props.disabled}                    
        >
            <CIcon name='cilTrash' />
            <span className="d-none d-md-inline ml-2">Delete</span>
        </CButton>
    )
}

const DTToolbar = (props) => {

    let showButtonVisible = props.showButtonVisible ?? true;
    let editButtonVisible = props.editButtonVisible ?? true;
    let deleteButtonVisible = props.deleteButtonVisible ?? true;
    return (
        <td>            
            <CButtonToolbar>
            { showButtonVisible ? (
                <DTToolbarShow disabled={props.showButtonDisabled}/>
              ) : ''
            }
            { editButtonVisible ? (
                <DTToolbarEdit disabled={props.editButtonDisabled}/>
              ) : ''
            }
            { deleteButtonVisible ? (
                <DTToolbarDelete disabled={props.deleteButtonDisabled}/>
              ) : ''
            }
            </CButtonToolbar>            
        </td>
    )
}

export default DTToolbar;