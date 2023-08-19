import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import useStyles from './dropdown-styles2';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';

import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const SelectPlaceholder = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.dropdownPlaceholderText}>{children}</div>;
};

const iconStyles = {
  selectIcon: {
    color: "#bab9b9"
  }
};

const CustomExpandMore = withStyles(iconStyles)(
  ({ className, classes, ...rest }) => {
    return (
      <KeyboardArrowDownIcon
        {...rest}
        className={clsx(className, classes.selectIcon)}
      />
    );
  }
);


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
    <FormControl className={classes.dropdown}
    >
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
            
//variant='outlined'

            inputProps={{
              className: classes.dropdownInput,
            }}
            IconComponent={CustomExpandMore}
            MenuProps={{
              classes: {
                paper: classes.dropdownMenu,
                list: classes.dropdownMenuList,
              },
              
              PaperProps: {
                style: {
                  border: '2px solid #216194',
                },
              },
              anchorOrigin: {
                vertical: 'bottom',
                vertical: 24,
                horizontal: 'left',
                horizontal: -20,
              },
              getContentAnchorEl: null,
              transformOrigin: {
                vertical: -14,
                horizontal: 'left',
              },
            }}
          >
            {selectOptions.map(option => (
              <MenuItem
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
