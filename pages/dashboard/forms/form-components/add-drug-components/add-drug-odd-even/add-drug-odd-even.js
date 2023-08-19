import React from 'react';
import { Grid } from '@material-ui/core';
import DayPicker from '../../day-picker/day-picker';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';

const AddDrugOddEven = ({ formMethods }) => {
  const options = ['Odd calendar day', 'Even calendar day'];
  const oddEven = formMethods.watch('oddEvenDays');

  return (
    <Grid item container direction="column">
      <Grid item>
        <DayPicker
          name={`oddEvenDays`}
          control={formMethods.control}
          options={options}
          rules={{ required: true }}
          shouldUnregister={true}
        />
      </Grid>
      <Grid item container direction="row">
        {oddEven && oddEven.includes('Odd calendar day') && (
          <Grid item>
            <TimeSlot
              control={formMethods.control}
              name={`oddTimeslots`}
              rules={{}}
              shouldUnregister={true}
              label={`Odd calendar day (Time and Quantity)`}
            />
          </Grid>
        )}
        {oddEven && oddEven.includes('Even calendar day') && (
          <Grid item>
            <TimeSlot
              control={formMethods.control}
              name={`evenTimeslots`}
              rules={{}}
              shouldUnregister={true}
              label={`Even calendar day (Time and Quantity)`}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default AddDrugOddEven;
