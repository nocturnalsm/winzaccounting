import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import MyAlert from '../../alert.js';
import axios from 'axios';

const BankSearch = ({value: defaultValue, filter, onChange, innerRef, ...restProps}) => {
  const [inputValue, setValue] = useState(defaultValue);
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = value => {
    setValue(value);
    if (value){
      onChange(value.id);
    }
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
    if (value){
      onChange(value.id);
    }
  }

  // load options using API call
  const loadOptions = (inputValue) => {
    return axios.get("api/setup/banks", {
      params: {
          limit: 10000,
          filter: {name: inputValue, ...filter}
      }
    })
    .then(response => {
        return response.data.data
    })
    .catch(error => {
        MyAlert.error({text: error.response})
    })
  };

  return (
      <AsyncSelect {...restProps}
        cacheOptions
        defaultOptions
        ref={innerRef}
        value={selectedValue}
        defaultValue={defaultValue}
        getOptionLabel={e => e.name}
        getOptionValue={e => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
  );
}

export default BankSearch;
