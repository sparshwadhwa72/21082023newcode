import React from 'react';
import { Grid } from '@material-ui/core';
import DayPicker from '../../day-picker/day-picker';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';
const AddDrugSpecificDay = ({ formMethods }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const interval = formMethods.watch('days');

  return (
    <Grid container item direction="column">
      <Grid item>
        <DayPicker
          name={`days`}
          control={formMethods.control}
          options={days}
          rules={{}}
          shouldUnregister={true}
        />
      </Grid>
      {interval !== '' && (
        <Grid item>
          <TimeSlot
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
