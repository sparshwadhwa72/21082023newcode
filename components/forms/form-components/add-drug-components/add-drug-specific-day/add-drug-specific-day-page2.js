import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import DayPicker from '../../day-picker/day-picker';
import { Link } from "react-router-dom";


import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';
const AddDrugSpecificDay = ({ formMethods }) => {
  const options = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const interval = formMethods.watch('specificDays');

  
  return (
    
    <Grid container item direction="column">
      <br></br>
      
      <Grid item 
      style={{
        width: '416px',
        height: '363px',
        padding: '14px 20.1px 14px 20px',
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
        backgroundColor: '#fff',

      }}>
        <Typography
        style={{
          width: '201px',
          height: '21px',
          flexGrow: 0,
          fontFamily: 'Roboto',
          fontSize: '18px',
          fontWeight: 'bold',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 'normal',
          letterSpacing: 'normal',
          textAlign: 'center',
          color: '#216194',
        }}>
          Which Day of the week?
        </Typography>
        <Typography
        style={{
          width: '203px',
          height: '19px',
          flexGrow: 0,
          margin: '4px',
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 'normal',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 'normal',
          letterSpacing: 'normal',
          textAlign: 'left',
          color: '#bab9b9',
        }}>
          You can select multiple days
        </Typography>
        
        <DayPicker
       
          name={`specificDays`}
        
          control={formMethods.control}
          options={options}
 
          rules={{ required: true }}
          shouldUnregister={true}
        />
      </Grid>
      
   
    
    </Grid>
  );
};
export default AddDrugSpecificDay;
