import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import useStyles from './datepicker styles';

import { Grid , Typography} from '@material-ui/core';
import { date } from "yup";
import { color } from "@mui/system";



const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  
const classes = useStyles();

  const formatInputValue = () => {
    if (!selectedDate) return '';
    return `Date: ${selectedDate.date}`;
  };

  const renderCustomInput = ({ ref }) => (
    <input
    style={{
      margin: '20px 0px 0px -8px',
      borderStyle: 'dotted',
      borderColor: '#fff',
      width: '300px',
      borderRadius: '16px',
      outlineColor: '#fff',
      fontSize: '16px',
      color: '#216194',
      '&::placeholder': {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#BAB9B9',
        opacity: '1',
        
    },
      
    }}
    
      readOnly
      ref={ref} // necessary
      placeholder="01/05/2023"
      value={selectedDate ? ` ${selectedDate.day.toString().padStart(2, '0')}/${selectedDate.month.toString().padStart(2, '0')}/${selectedDate.year}` : ''}

      className="my-custom-input-class" // a styling class
    />
  )
  return (
    <Grid item
    className={classes.Inputbox3}>
      <Typography
      style={{
        color: '#216194',
        fontFamily: 'Roboto',        
        margin: '0px 0px 0px 0px',        
        fontSize: '18px',
        fontWeight: 'bold',
        height: '11px',
        lineHeight: '1.11',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        transform: 'none',
        transition: 'none',
        position: 'relative',
        '&.Mui-focused': {
            color: '#216194',
        },
      }}
      >Date of birth</Typography>
    <DatePicker
      value={selectedDate}
      outlineColor= "#fff"
      placeholder="abcs"
      calendarPopperPosition="bottom"
      formatInputText={formatInputValue}
      onChange={setSelectedDate}
      inputClassName="my-custom-input" 
      inputPlaceholder="e.g. 25/02/2023"
      calendarTodayClassName="customtodayday"
        renderInput={renderCustomInput}
      maximumDate={utils().getToday()}
      colorPrimary='#216194'
    />
    </Grid>
  );
};



export default DateInput;