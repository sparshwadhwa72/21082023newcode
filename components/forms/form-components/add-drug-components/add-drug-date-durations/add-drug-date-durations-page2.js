import React from 'react';
import { Grid, Button, IconButton } from '@material-ui/core';
import { useFieldArray } from 'react-hook-form';

import DateInput from '../../date-picker/datepicker5';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';
import '@fontsource/roboto';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';


const AddDrugDateDurations = ({formMethods}) => {
    const { fields, append, remove } = useFieldArray({
        control: formMethods.control,
        name: 'dosagePeriods',
        shouldUnregister: true
    })

    const handleAddPeriod = () => {
        append({});

    }

      

    return (
        <Grid item container
        direction='column'>
           
          
            <Grid item>
            <br></br>
                <Button onClick={handleAddPeriod}
                style={{
                    height: '80px',
                    width: '416px',
                    fontSize: '18px',
                    borderRadius: '16px',
                    fontWeight: 400,
                    fontFamily: 'Roboto',
                    boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
                    padding: '20px 76px 16px 50px',
                    backgroundColor: '#fff',
                    textalign: 'center',
                    textTransform: 'none',
                    color: '#bab9b9',
                }}
                >
                    + Add time period
                </Button>
            </Grid>
            {fields.map((field, index) => (
  <Grid item container key={field.id}>
     <IconButton
     style={{
        margin: '0px -25px 42px -22px'
     }}
   
   onClick={() => remove(index)}
 >
     <CancelOutlinedIcon
         style={{
           color: '#216194',
         }} />
 </IconButton>
 
    <DateInput
      control={formMethods.control}
      name={`dosagePeriods.${index}.dateRange`}
      rules={{}}
      shouldUnregister={true}
      
    />
   
  </Grid>
))}
            
        </Grid>   
    )
}

export default AddDrugDateDurations;