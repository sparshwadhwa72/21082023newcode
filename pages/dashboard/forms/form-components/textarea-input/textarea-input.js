import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const TextareaInput = ({ control, name, label, rules, placeholder, characterLimit }) => {
  const [charLimit, setCharLimit] = useState(characterLimit);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue=""
      render={({ field }) => (
        <TextField
        multiline
       
        onContentSizeChange={(event) => {
          this.setState({ height: event.nativeEvent.contentSize.height })
        }}
          label={label}
          placeholder={placeholder}
          inputProps={{
            maxLength: charLimit,
          }}
          InputLabelProps={{
            shrink: true,
            //className: classes.textFieldLabel
          }}
          InputProps={{
            disableUnderline: false,
          }}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          type="text"
          helperText={` remaining characters ${field.value.length}/${charLimit}`}
        />
      )}
    />
  );
};

export default TextareaInput;
