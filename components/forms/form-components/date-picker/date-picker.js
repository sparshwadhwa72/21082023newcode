import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Controller } from 'react-hook-form';
import useStyles from './datepicker styles';
import TextField from "@material-ui/core/TextField";
import clsx from 'clsx';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';

const DateInput = ({ control, name, placeholder,
  additionalStyles, label, rules, ...props }) => {
    
  const classes = useStyles();
  return (
    
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          control={control}
          name={name}
          defaultValue={new Date()}
          rules={rules}
          
          
          render={({ field }) => (
            <DatePicker
            
            minimumDate={utils().getToday()}
            colorPrimary='#216194'
        
            calendarPopperPosition="bottom"
            
        
            format="MM/dd/yyyy"
            onChange={field.onChange}
            onBlur={field.onBlur}
            renderInput={(params) => <TextField {...params} 
              
          label={label}
          placeholder={placeholder}
          
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
          />
            
            //openTo="year"

              
              
            
          )}
          {...props}
        />
        
      </MuiPickersUtilsProvider>
    </div>
  );
};
export default DateInput;
