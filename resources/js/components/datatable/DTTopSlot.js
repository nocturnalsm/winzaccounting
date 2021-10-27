import React from "react";
import DTCreateButton from "./DTCreateButton";

const DTTopSlot = ({children, createButtonProps}) => {
      
    const createButton = (
        <DTCreateButton {...createButtonProps} />
    )
    let childProps = {
        createButton: createButton
    }    
    if (!children){
        return createButton
    }
    else {
        return (
            <>         
                {children(childProps)}
            </>
        )
    }
}

export default DTTopSlot
