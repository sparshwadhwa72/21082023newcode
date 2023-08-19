import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import DropdownInput from './form-components/dropdown/dropdownpage2';

import AddDrugSpecificDay from './form-components/add-drug-components/add-drug-specific-day/add-drug-specific-day-page2';
import AddDrugEveryN from './form-components/add-drug-components/add-drug-every-n/add-drug-every-n-page2';
import AddDrugAsNeeded from './form-components/add-drug-components/add-drug-as-needed/add-drug-as-needed';
import AddDrugOddEven from './form-components/add-drug-components/add-drug-odd-even/add-drug-odd-even-page2';
import AddDrugDateDurations from './form-components/add-drug-components/add-drug-date-durations/add-drug-date-durations-page2';
import AddDrugEveryday from './form-components/add-drug-components/add-drug-everyday/add-drug-everyday';
import ManagePbar2 from '@components/layout/add-drug/Manage-schedule-probar';
import ManagePbarSch from '@components/layout/add-drug/Add-drug-schedule';

const AddDrugTwo = ({ formMethods }) => {
  const { watch } = useFormContext();

  const frequencyTypes = [
    'Everyday',
    'Specific day(s)',
    'Every N day(s)',
    'Duration(s)',
    'Odd/Even calendar day',
    'As needed',
  
    
   
  ];
  const selectedFrequencyType = watch('frequency');
  return (
    <Grid container item direction="column">
      <br></br>    <br></br>
      
      <Grid
            >
            
            <ManagePbarSch/>
            </Grid>
            <br></br>
      <Grid item container direction="column">
        <Grid item
        >
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
        {selectedFrequencyType === 'Every N day(s)' && <AddDrugEveryN formMethods={formMethods} />}
        {selectedFrequencyType === 'As needed' && <AddDrugAsNeeded formMethods={formMethods} />}
        {selectedFrequencyType === 'Odd/Even calendar day' && (
          <AddDrugOddEven formMethods={formMethods} />
        )}
        {selectedFrequencyType === 'Duration(s)' && (
          <AddDrugDateDurations formMethods={formMethods} />
        )}
        {selectedFrequencyType === 'Everyday' && <AddDrugEveryday formMethods={formMethods} />}
      </Grid>
    </Grid>
  );
};

export default AddDrugTwo;
