import React from 'react';
import useStyles from './text-with-dropdown.styles';
import { Grid, TextField, Select, MenuItem, FormControl } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const SelectPlaceholder = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.dropdownTextPlaceholderText}>{children}</div>;
};

const TextDropdown = ({
  textPlaceholder,
  dropdownPlaceholder,
  control,
  textName,
  dropdownName,
  label,
  dropdownOptions,
  textRules,
  dropdownRules,
  ...props
}) => {
  const classes = useStyles();
  const { trigger } = useFormContext();

  return (
    <Grid container direction="row">
      <Grid item>
        <Controller
          control={control}
          name={textName}
          defaultValue=""
          rules={textRules}
          render={({ field, formState }) => (
            <TextField
              {...field}
              label={label}
              InputProps={{
                disableUnderline: true,
              }}
              placeholder={textPlaceholder}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          control={control}
          name={dropdownName}
          defaultValue=""
          rules={dropdownRules}
          render={({ field }) => (
            <Select
              displayEmpty
              value={field.value}
              renderValue={
                field.value !== ''
                  ? undefined
                  : () => <SelectPlaceholder>{dropdownPlaceholder}</SelectPlaceholder>
              }
              onChange={field.onChange}
              onBlur={field.onBlur}
              disableUnderline
              IconComponent={KeyboardArrowDownIcon}
              MenuProps={{
                classes: {
                  paper: classes.dropdownMenu,
                  list: classes.dropdownMenuList,
                },
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
                transformOrigin: {
                  vertical: -24,
                  horizontal: 'left',
                },
                onBlur: field.onBlur,
              }}
            >
              {dropdownOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default TextDropdown;
