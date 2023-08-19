import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import DayPicker from '../../day-picker/day-picker2';
import useStyles from '../../text-input/text-input.styles';

import DropdownInput from '../../dropdown/dropdownpage2-disabled';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';
import TimeSlotSpecific from '../../add-drug-timeslot/add-drug-timeslot-specific-days';

const AddDrugSpecificDay = ({ formMethods }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const interval = formMethods.watch('specificDays');

  
  const classes = useStyles();

  const daysMap = {
    "Monday": "Mon",
    "Tuesday": "Tue",
    "Wednesday": "Wed",
    "Thursday": "Thu",
    "Friday": "Fri",
    "Saturday": "Sat",
    "Sunday": "Sun"
  }
  
  const displayDays = () => {
    let days = interval.map(day => daysMap[day]);
    if (days.length === 1) {
      return <Typography className={classes.Selectedday}>{days[0]}</Typography>;
    } else {
      const formattedDays = days.join(", ");
      return <Typography className={classes.Selectedday}>{formattedDays}</Typography>;
    }
  };
  

  return (
    
    <Grid container item direction="column">
      <br></br>
      
      <Grid item container
      direction="column"
      spacing={9}
      
          style={{
            width: '416px',
            
      height: '80px',
      margin: '15px 0px 0px 0px ',
      padding: '14px 20px ',
      boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
      backgroundColor: '#fff',
      borderRadius: '16px',
    
    }}
      >
        
      <Typography
      style={{
        width: '213px',
        height: '21px',
        flexGrow: '0',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        
padding: '20px 20p 20px 20px',

        fontStretch: 'normal',
       fontStyle: 'normal',
        lineHeight: 'normal',
        
       letterSpacing: 'normal',
        textAlign:'left',
        color: '#216194',
      }}
      >Day(s) of the week*</Typography>
        
        <DayPicker
          name={`specificDays`}
          control={formMethods.control}
          options={days}
          shouldUnregister={true}
        />
        <Grid item
         direction="row" container
         style={{
          width: '600px',
          margin: '-5px 0px 0px -250px'
         }}>

{interval && displayDays()}
            

</Grid>



   
      </Grid>
      
  
        
   
      <br></br>
      <br></br>
      <br></br>
      {interval && (
        <Grid item>
          <TimeSlotSpecific
            control={formMethods.control}
            name={`times`}
            rules={{ required: true }}
            shouldUnregister={true}
            label={`Time and Quantity`}
          />
        </Grid>
      )}
    </Grid>
  );
};
export default AddDrugSpecificDay;
