import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useFormContext } from 'react-hook-form';
import DayPicker from '../../day-picker/day-picker';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';

const AddDrugOddEven = ({ formMethods }) => {
  const options = ['Odd calendar day', 'Even calendar day'];
  const { watch } = useFormContext();
  const oddEven = formMethods.watch('oddEvenDays');
 

  return (

    <Grid item container direction="column"
    style={{
      width: '416px',
      height: '158px',
      margin: '15px 0px 0px 0px ',
      padding: '14px 20px ',
      boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
      backgroundColor: '#fff',
      borderRadius: '16px',
  }}>
      <Typography
      style={{
        width: '213px',
        height: '21px',
        flexGrow: '0',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        
      margin: '2px 0px 0px 0px ',
        fontStretch: 'normal',
       fontStyle: 'normal',
        lineHeight: 'normal',
       letterSpacing: 'normal',
        textAlign:'center',
        color: '#216194',
      }}
      >Odd/Even calender days?*</Typography>
      
      <Typography
       style={{
        width: '198px',
        height: '19px',
        
      margin: '3px 0px 0px 0px ',
        flexGrow: '0',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
       fontStyle: 'normal',
        lineHeight: 'normal',
       letterSpacing: 'normal',
        textAlign:'left',
        color: '#bab9b9',
      }}
      >You can select both options</Typography>
      <Grid item>
        <DayPicker
          name={`oddEvenDays`}
          control={formMethods.control}
          options={options}
          rules={{ required: true }}
          shouldUnregister={true}
        />
      </Grid>
      
      <Grid item container direction="row"
   style={{
    margin: '130px 0px 0px -300px',
    width: '350px',
   }}
     >
        
      </Grid>
      
    </Grid>
  );
};

export default AddDrugOddEven;
