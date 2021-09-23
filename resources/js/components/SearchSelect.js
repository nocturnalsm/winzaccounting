import React, { useState, useImperativeHandle, useRef } from 'react';
import AsyncSelect from 'react-select/async';
import MyAlert from '../alert.js';
import axios from 'axios';

const SearchSelect = React.forwardRef(({
      invalid, 
      optionLabel,
      optionValue,
      url,       
      filter, 
      onChange, 
      innerRef, ...restProps}, ref) => {  
  
  const [inputValue, setValue] = useState(null);  
  const selectRef = useRef(null)
  const [selectedValue, setSelectedValue] = useState(null);
  
  // handle input change event
  const handleInputChange = newValue => {    
      setValue(newValue);      
  };

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
      }

  }));

  // handle selection
  const handleChange = newValue => {
      setSelectedValue(newValue);      
      onChange(newValue == null ? "" : newValue)      
  }

  // load options using API call
  const loadOptions = (inputValue, callback) => {                
      axios.get(url, {
        params: {
            q: inputValue,
            filter: filter
        }
      })
      .then(response => {
          let options = response.data.data;                    
          callback(options)      
      })
      .catch(error => {
          MyAlert.error({text: error.response})
      })
  };

  return (
      <AsyncSelect {...restProps}
        cacheOptions
        defaultOptions
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
})

export default SearchSelect
