import {CButton} from '@coreui/react'
import CIcon from '@coreui/icons-react';

const CreateButton = (props) => {
    
    return (
        <CButton
            className={props.className}
            disabled={props.disabled ?? false} 
            color={props.color ?? 'primary'}
            onClick={event => props.action(event)}>
                <CIcon name={props.icon ?? 'cil-plus'} />
                <span className="ml-2">{props.text ?? 'Add'}</span>
        </CButton>
    )
}

export default CreateButton