import React from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './text-input.styles';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';

const TextInput = ({
  control,
  name,
  rules,
  label,
  placeholder,
  additionalStyles,
  type,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          label={label}
          className={clsx(additionalStyles, classes.textField)}
          InputLabelProps={{
            shrink: true,
            className: classes.textFieldLabel,
          }}
          InputProps={{
            disableUnderline: true,
          }}
          inputProps={{
            className: classes.textFieldInput,
          }}
          placeholder={placeholder}
          type={type}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  );
};

export default TextInput;
