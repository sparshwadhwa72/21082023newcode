import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import useStyles from './text-input.styles';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';

const TextareaInput = ({ control, name, label, rules, placeholder,additionalStyles, characterLimit }) => {
  const [charLimit, setCharLimit] = useState(characterLimit);

  
  const classes = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue=""
      render={({ field }) => (
        <TextField
        multiline
       
          label={label}
          
          className={clsx(additionalStyles, classes.TextField)}
          placeholder={placeholder}
          
          inputProps={{
            maxLength: charLimit,
              className: classes.MtextFieldInput,
          
          }}
          InputLabelProps={{
            shrink: true,
            
            className: classes.textFieldLabel,
            //className: classes.textFieldLabel
          }}
          variant="outlined"
          InputProps={{
            disableUnderline: true,
            notched: false,
            disabled: true,
            

            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          type="text"
          helperText={` remaining characters ${field.value.length}/${charLimit}`}
          FormHelperTextProps={{
          className: classes.helperText
        }}
          
        />
      )}
    />
  );
};

export default TextareaInput;
