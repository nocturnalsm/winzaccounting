import React, { useState, useImperativeHandle, useRef, useEffect } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import MyAlert from '../alert.js';
import axios from 'axios';
import {debounce, isEqual} from 'lodash';

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
    const [queryParams, setQueryParams] = useState(urlParams)
    const [options, setOptions] = useState()
    const [prevParams, setPrevParams] = useState(false)
    const [value, setValue] = useState('')

    useEffect(() => {
       setSelectedValue(defaultValue)
    }, [defaultValue])

    const handleInputChange = (inputValue) => {
        setValue(inputValue)
    }
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

    const onFocus = () => {
        if (!options){
            loadOptions()
        }
    }

    useEffect(() => {
        if (queryParams){
            loadOptions()
        }
    }, [queryParams])

    useEffect(() => {
        if (urlParams){
            if (!isEqual(queryParams, urlParams)){
                setQueryParams(urlParams)
            }
        }
    }, [urlParams])

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

    // load options using API call
      const loadOptions = () => {
        let newParams = {q: value, ...queryParams}
        let oldParams = {q: value, ...oldParams}
        console.log(newParams)
        console.log(oldParams)
        if (isEqual(newParams, oldParams)){
            return;
        }
        axios.get(url, {
            params: newParams
        })
        .then((response) => {
            let options = response.data.data;
            setOptions(options || [])
        })
        .catch(error => {
            console.log(error)
            MyAlert.error({text: error.response})
        })
    };

    if (async){
        return (
            <Select {...restProps}
                cacheOptions
                isClearable
                className={"react-select" +(invalid ? ' is-invalid' : '')}
                classNamePrefix="react-select"
                ref={selectRef}
                value={selectedValue}
                getOptionLabel={optionLabel}
                getOptionValue={optionValue}
                options={options}
                onInputChange={handleInputChange}
                onChange={handleChange}
                styles={customStyles}
                onFocus={onFocus}
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
                defaultValue={defaultValue}
            />
        );
    }

})

export default SearchSelect
