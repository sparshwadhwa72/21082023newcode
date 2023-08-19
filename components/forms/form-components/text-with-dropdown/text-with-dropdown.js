import React from 'react';
import useStyles from './text-with-dropdown.styles';
import { Grid, TextField, Select, MenuItem, FormControl } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import clsx from 'clsx';
import { ArrowLeft } from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";


import Paper from "@material-ui/core/Paper";
import { style } from '@mui/system';

const SelectPlaceholder = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.dropdownTextPlaceholderText}>{children}</div>;
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

const CustomPaper = (props) => {
  return <Paper elevation={8} style={{borderRadius: '16px',
  width: '590px',
  boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
  fontFamily: 'Roboto',
  fontSize: '16px',
  color: '#216194',
  textAlign: 'center',}} {...props} />;
};

const TextDropdown = ({
  textPlaceholder,
  dropdownPlaceholder,
  control,
  
  additionalStyles,
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
    <Grid container direction="row" >
      <Grid item >
        
        <Controller
          control={control}
          name={textName}
          
          defaultValue=""
          rules={textRules}
          render={({ field, formState }) => (
            <TextField
              {...field}
              
              variant="outlined"
              label={label}
              
          className={clsx(additionalStyles, classes.textField)}
              
              InputProps={{
                disableUnderline: true,
                notched: false,

                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                
              }}
              inputProps={{
                className: classes.dropdownInput,
              }}
              
              InputLabelProps={{
                shrink:true,
                className: classes.dropdownLabel,
              }}
              placeholder={textPlaceholder}
              value={field.value}
              
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
            
          )}
        />
        <Controller
          control={control}
          name={dropdownName}
          
          defaultValue=""
          rules={dropdownRules}
          render={({ field }) => (
            <Select
              displayEmpty
              value={field.value}
              
          className={clsx(additionalStyles, classes.unittextField)}
              renderValue={
                field.value !== ''
                  ? undefined
                  : () => <SelectPlaceholder>{dropdownPlaceholder}</SelectPlaceholder>
              }
              onChange={field.onChange}
              
              onBlur={field.onBlur}
              disableUnderline
              inputProps={{
                className: classes.AdropdownInput,
              }}
              //style={{ width: 150, }}
              IconComponent={(CustomExpandMore)}
              
              MenuProps={{
                classes: {
                  paper: classes.dropdownMenu,
                  list: classes.dropdownMenuList,
                },
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                  horizontal: -24,
                },
                getContentAnchorEl: null,
                transformOrigin: {
                  vertical: -13,
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
