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
    placeholder="20/04/2023"
    style={{
      margin: '20px 0px 0px -7px',
      width: '290px',
    

    borderStyle: 'dotted',
      borderColor: '#fff',
      borderRadius: '16px',
      outlineColor: '#fff',
      fontSize: '16px',
      fontFamily: 'Roboto',
      color: '#216194',
     
      
      
    }}
    
      readOnly
      ref={ref} // necessary
       value={selectedDate ? ` ${selectedDate.day}/${selectedDate.month}/${selectedDate.year}` : ''}
      
      className="my-custom-input-class" // a styling class
    />
  )
  return (
    <Grid item

    className={classes.MInputbox}
    

     
    >
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
      >Expiry Date</Typography>
    <DatePicker
      value={selectedDate}
      outlineColor= "#fff"
      
      calendarPopperPosition="bottom"
      formatInputText={formatInputValue}
      onChange={setSelectedDate}
      inputClassName="my-custom-input" 
    
      calendarTodayClassName="customtodayday"
        renderInput={renderCustomInput}
      minimumDate={utils().getToday()}
      colorPrimary='#216194'
    />
    </Grid>
  );
};



export default DateInput;