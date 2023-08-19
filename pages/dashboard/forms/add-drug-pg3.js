import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

const AddDrugThree = ({ formMethods }) => {
  return (
    <Grid container item direction="column">
      <Grid item container direction="column">
        <Grid item>
          <DropdownInput
            placeholder={`(i.e. Everyday)`}
            name={`frequency`}
            label={`Frequency*`}
            control={formMethods.control}
            selectOptions={frequencyTypes}
            rules={{ required: true }}
          />
        </Grid>
        {selectedFrequencyType === 'Specific day(s)' && (
          <AddDrugSpecificDay formMethods={formMethods} />
        )}
        {selectedFrequencyType === 'Every N days' && <AddDrugEveryN formMethods={formMethods} />}
        {selectedFrequencyType === 'As needed' && <AddDrugAsNeeded formMethods={formMethods} />}
        {selectedFrequencyType === 'Odd/Even calendar day' && (
          <AddDrugOddEven formMethods={formMethods} />
        )}
        {selectedFrequencyType === 'Date duration(s)' && (
          <AddDrugDateDurations formMethods={formMethods} />
        )}
        {selectedFrequencyType === 'Everyday' && <AddDrugEveryday formMethods={formMethods} />}
      </Grid>
    </Grid>
  );
};

export default AddDrugThree;
