import {CButton, CButtonToolbar} from '@coreui/react';
import CIcon from '@coreui/icons-react';


const DTToolbarShow = (props) => {
    return (
        <CButton className="mr-2"
            color="success"                                        
            shape="square"
            size="sm"                       
            disabled={props.disabled}             
            to={props.showLink ? props.showLink.replace(/\/$/, '') + "/" + props._id : ''}          
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
            to={props.editLink ? props.editLink.replace(/\/$/, '') + "/" + props._id : ''}
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
            to={props.deleteLink ? props.deleteLink.replace(/\/$/, '') + "/" + props._id : ''}                 
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
                <DTToolbarShow 
                    _id={props._id} 
                    showLink={props.showLink} 
                    disabled={props.showButtonDisabled}
                />
              ) : ''
            }
            { editButtonVisible ? (
                <DTToolbarEdit 
                    _id={props._id} 
                    editLink={props.editLink} 
                    disabled={props.editButtonDisabled}
                />
              ) : ''
            }
            { deleteButtonVisible ? (
                <DTToolbarDelete 
                    _id={props._id} 
                    deleteLink={props.deleteLink} 
                    disabled={props.deleteButtonDisabled}
                />
              ) : ''
            }
            </CButtonToolbar>            
        </td>
    )
}

export default DTToolbar;