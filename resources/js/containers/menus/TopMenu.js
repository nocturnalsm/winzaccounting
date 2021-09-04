import React from 'react'
import {
  CDropdown,  
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CDropdownDivider
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TopMenu = (props) => {
    return (
      <CDropdown inNav direction="down">
        <CDropdownToggle className="c-header-nav-link">
          {props.title}
        </CDropdownToggle>
        <CDropdownMenu className="pt-0">
            {
                props.items.map((item, index) => {                        
                    let visible = item.visible ?? true;
                    if (visible){
                        return item.isDivider && item.isDivider === true ?
                            (   
                                <CDropdownItem key={index} divider />
                            )
                            :   
                            (
                                <CDropdownItem key={index} to={item.href}>{item.caption}</CDropdownItem>
                            )
                    }       
                })
            }
        </CDropdownMenu>
      </CDropdown>
    )
  }
  
  export default TopMenu
  