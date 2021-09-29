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
      url,
      filter,
      onChange,
      urlParams,
      innerRef, ...restProps}, ref) => {

    const selectRef = useRef(null)
    const [selectedValue, setSelectedValue] = useState({})    
    const [options, setOptions] = useState([])
    
    useEffect(() => {
       setSelectedValue(defaultValue)
    }, [defaultValue])

    useEffect(() => {        
        if (restProps.id == 'parent'){
            console.log(defaultOptions)
        }
        if (typeof defaultOptions == 'undefined' || defaultOptions === true){                 
            loadOptions("")
        }
    }, [defaultOptions])

    // handle selection
    const handleChange = (inputValue, action) => {
        switch (action.action){
            case 'select-option':
                setSelectedValue(inputValue)
                onChange(inputValue)
                return;
            case 'clear':
                setSelectedValue(null)
                onChange(inputValue)
            default:
                return;
        }
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
        loadOptions(){
            asyncLoadOptions("")
        }

    }));

    // load options using API call
    const loadOptions = (inputValue, callback) => {        
        axios.get(url, {
            params: {q: inputValue, ...urlParams}
        })
        .then((response) => {                           
            let data = response.data.data;        
            if (callback){                         
                setTimeout(() => {
                    callback(data)
                }, 1000)         
            }
            else {                                
                setOptions(data)
            }
        })
        .catch(error => {
            console.log(error)
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
                onChange={handleChange}
                styles={customStyles}
                defaultOptions={defaultOptions ?? true}
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
                getOptionLabel={optionLabel}
                getOptionValue={optionValue}                
                onChange={handleChange}
                styles={customStyles}                             
            />
        );
    }

})

export default SearchSelect
