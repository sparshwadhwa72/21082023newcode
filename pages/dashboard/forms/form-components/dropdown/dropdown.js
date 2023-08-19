import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import useStyles from './dropdown.styles';
import { Controller } from 'react-hook-form';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const SelectPlaceholder = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.dropdownPlaceholderText}>{children}</div>;
};

const DropdownInput = ({
  placeholder,
  name,
  label,
  control,
  // additionalStyles,
  selectOptions,
  rules,
  ...props
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.dropdown}>
      <InputLabel shrink={true} id={`${name}-dropdown`} className={classes.dropdownLabel}>
        {label}
      </InputLabel>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={rules}
        render={({ field }) => (
          <Select
            labelId={`${name}-dropdown`}
            displayEmpty
            value={field.value}
            className={classes.dropdownSelect}
            renderValue={
              field.value !== ''
                ? undefined
                : () => <SelectPlaceholder>{placeholder}</SelectPlaceholder>
            }
            onChange={field.onChange}
            onBlur={field.onBlur}
            disableUnderline
            inputProps={{
              className: classes.dropdownInput,
            }}
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
            }}
          >
            {selectOptions.map(option => (
              <MenuItem
                divider={true}
                className={classes.dropdownMenuItem}
                key={option}
                value={option}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default DropdownInput;
