import React from 'react';
import { Controller } from 'react-hook-form';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import useStyles from './autocomplete-dropdown.styles';

const AutocompleteDropdown = ({
  autocompleteOptions,
  label,
  control,
  name,
  rules,
  placeholder,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={rules}
        render={({ field }) => (
          <Autocomplete
            freeSolo
            autoSelect
            includeInputInList
            options={autocompleteOptions}
            defaultValue=""
            onChange={(e, data) => field.onChange(data)}
            onBlur={field.onBlur}
            value={field.value}
            renderInput={params => (
              <TextField
                {...params}
                label={label}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder={placeholder}
              />
            )}
          />
        )}
      />
    </div>
  );
};

export default AutocompleteDropdown;
