import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import useStyles from './datepicker styles';

import { Grid , Typography} from '@material-ui/core';



const DateInput = () => {

  
 
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });    
  
const classes = useStyles();

const inputValue = selectedDayRange.from && selectedDayRange.to ? (
  ` ${selectedDayRange.from.day.toString().padStart(2, '0')}/${selectedDayRange.from.month.toString().padStart(2, '0')}/${selectedDayRange.from.year} to ${selectedDayRange.to.day.toString().padStart(2, '0')}/${selectedDayRange.to.month.toString().padStart(2, '0')}/${selectedDayRange.to.year}`
) : '';

  const formatInputValue = () => {
    if (!selectedDate) return '';
    return `Date: ${selectedDate.date}`;
  };

  const renderCustomInput = ({ ref }) => (
    <input
    style={{
      margin: '20px 0px 0px -12px',
      borderStyle: 'dotted',
      borderColor: '#fff',
      width: '300px',
      borderRadius: '16px',
      outlineColor: '#fff',
      fontSize: '16px',
      color: '#216194',
      "& input::placeholder": {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: 'red',
        opacity: '1',
  
    },
    }}
    
    
      readOnly
      ref={ref} // necessary
      placeholder="10/05/2023 to 15/05/2023"
      value={inputValue}
      className="my-custom-input-class" // a styling class
    />
  )
  return (
    <Grid item
    className={classes.Inputbox2}>
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
      >Dosage Period 1</Typography>
    <DatePicker
      value={selectedDayRange}
      outlineColor= "#fff"
      calendarPopperPosition="bottom"
      onChange={setSelectedDayRange}
      inputClassName="my-custom-input" 
      inputPlaceholder="e.g. 25/02/2023"
      calendarTodayClassName="customtodayday"
        renderInput={renderCustomInput}
      minimumDate={utils().getToday()}
      colorPrimary='#216194'
      
      colorPrimaryLight="rgba(75, 207, 250, 0.4)"
    />
    </Grid>
  );
};



export default DateInput;