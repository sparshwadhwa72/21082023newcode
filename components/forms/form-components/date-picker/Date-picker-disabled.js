import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import useStyles from './datepicker styles';

import { Grid , Typography} from '@material-ui/core';
import { date } from "yup";



const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  
const classes = useStyles();

  const formatInputValue = () => {
    if (!selectedDate) return '';
    return `Date: ${selectedDate.date}`;
  };

  const renderCustomInput = ({ ref }) => (
    <input
    disabled
    style={{
      margin: '20px 0px 0px -5px',
      borderStyle: 'dotted',
      borderColor: '#fff',
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
      placeholder="e.g. 11/01/2023"
       value={selectedDate ? ` ${selectedDate.day}/${selectedDate.month}/${selectedDate.year}` : ''}
      
      className="my-custom-input-class" // a styling class
    />
  )
  return (
    <Grid item
    style={{
      height: '80px',
      width: '416px',
      borderRadius: '16px',
      borderColor: '#fff',
     
      boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
      padding: '16px 76px 16px 20px',
      backgroundColor: '#fff',
    

      '@media(max-Width: 390px)' : {
        width: '94%'
      },
    }}>
      <Typography
      style={{
        color: '#216194',
        fontFamily: 'Roboto',
        
        margin: '0px 0px 0px -5px',
        
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
      >Start Date*</Typography>
    <DatePicker
      value={selectedDate}
      outlineColor= "#fff"
      calendarPopperPosition="bottom"
      formatInputText={formatInputValue}
      onChange={setSelectedDate}
      inputClassName="my-custom-input" 
      inputPlaceholder="e.g. 25/02/2023"
      calendarTodayClassName="customtodayday"
        renderInput={renderCustomInput}
      minimumDate={utils().getToday()}
      colorPrimary='#216194'
    />
    </Grid>
  );
};



export default DateInput;