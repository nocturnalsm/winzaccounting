import React, { useState, useImperativeHandle, useRef, useEffect } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import MyAlert from '../alert.js';
import axios from 'axios';

const SearchSelect = React.forwardRef(({      
      async,
      invalid, 
      defaultOptions,
      optionLabel,
      optionValue,
      defaultValue,
      options,
      url,                   
      filter, 
      onChange, 
      urlParams,
      innerRef, ...restProps}, ref) => {  
      
    const selectRef = useRef(null)
    const [selectedValue, setSelectedValue] = useState(null);        
        
    // handle input change event
    const handleInputChange = value => {    
        onChange(value);
    };
    // handle selection
    const handleChange = value => {                            
        setSelectedValue(value);   
        onChange(value);     
    }
    const customStyles = {        
        control: (provided, state) => {        
            if (invalid){          
                const borderColor = '#e55353';          
                const backgroundRepeat = 'no-repeat';
                const backgroundSize = 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)';          
                return { ...provided, borderColor, backgroundRepeat, backgroundSize };
            }
            else {
                return provided
            }
        },
        singleValue: (provided, state) => {
            const color = "#768192";
            return { ...provided, color };
        }
    }

    useImperativeHandle(ref, () => ({

        setSelected(value) {         
            setSelectedValue(value)
        },
        focus(){
            selectRef.current.focus()
        },
        clearOptions(){          
            selectRef.current.state.defaultOptions = []
        },
        loadOptions(){
            selectRef.current.loadOptions(null, (options) => {
                return options
            })
        }

    }));  

    // load options using API call
    const loadOptions = (inputValue, callback) => {                
        axios.get(url, {
            params: {q: inputValue, ...urlParams}
        })
        .then((response) => {
            let options = response.data.data;                    
            callback(options)      
        })
        .catch(error => {          
            MyAlert.error({text: error.response})
        })
    };

    if (async){
        return (
            <AsyncSelect {...restProps}            
                cacheOptions                
                isClearable        
                className={"react-select" +(invalid ? ' is-invalid' : '')}
                classNamePrefix="react-select"
                ref={selectRef}        
                value={selectedValue}                
                getOptionLabel={optionLabel}
                getOptionValue={optionValue}
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
                onChange={handleChange}
                styles={customStyles}
            />     
        );
    }
    else {
        return (
            <Select {...restProps}            
                defaultOptions={defaultOptions ?? true}
                isClearable        
                className={"react-select" +(invalid ? ' is-invalid' : '')}
                classNamePrefix="react-select"
                ref={selectRef}        
                value={selectedValue}       
                options={options}         
                defaultValue={defaultValue}
                getOptionLabel={optionLabel}
                getOptionValue={optionValue}            
                onInputChange={handleInputChange}
                onChange={handleChange}
                styles={customStyles}
            />     
        );
    }
  
})

export default SearchSelect
