import React from 'react';
import {  MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Controller } from 'react-hook-form';
import useStyles from './datepicker styles';
import TextField from "@material-ui/core/TextField";
import clsx from 'clsx';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SxProps } from "@mui/system";
import { lime } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";


const DateInput = ({ control, name, placeholder,
  additionalStyles, label, rules, ...props }) => {
    
  const classes = useStyles();

  const defaultMaterialTheme = createTheme({
    palette: {
      primary: lime,
    },
  });

  
  return (
    
    <div>
        
        <Controller
          control={control}
          name={name}
          defaultValue={new Date()}
          rules={rules}
          
          
          
          render={({ field }) => (
            
 <ThemeProvider theme={defaultMaterialTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
 
            
            <MobileDatePicker
            showToolbar={false}
            //openTo="year"
          
            showYearDropdown
            
            KeyboardButtonProps={{ disabled: true, style: { display: 'none' }}}
              autoOk
              minDate={new Date()}
              disableToolbar="true"

              label={label}
              disablePast
              
              value={field.value}
              initialFocusedDate={Date.now()}
              inputFormat="DD/MM/YYYY"
              
           
              onChange={field.onChange}
              renderInput={(params) => <TextField {...params} 
              
          variant= "outlined"
          
          
          InputLabelProps={{
                
                shrink: false,
            className: classes.dropdownlabel,                 
                }}
                inputProps={{
                 
                  
                }}
            className={clsx(additionalStyles, classes.textField)}
            
          InputProps={{
            
            className: classes.textFieldInput,
            notched: false,
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            ...params.inputProps, 
            
          }}
          
          />}
      
      
              onBlur={field.onBlur}
            />
            </LocalizationProvider>
    </ThemeProvider>       
    
          )}
          {...props}
        />
        
      
    </div>
  );
};
export default DateInput;
