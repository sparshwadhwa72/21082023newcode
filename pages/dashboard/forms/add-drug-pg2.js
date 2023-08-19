import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import AutocompleteDropdown from './form-components/autocomplete-dropdown/autocomplete-dropdown';
import DropdownInput from './form-components/dropdown/dropdown';
import TextareaInput from './form-components/textarea-input/textarea-input';
import TextDropdown from './form-components/text-with-dropdown/text-with-dropdown';
import TextInput from './form-components/text-input/text-input';
import DateInput from './form-components/date-picker/date-picker';
import AddDrugSpecificDay from './form-components/add-drug-components/add-drug-specific-day/add-drug-specific-day';
import AddDrugEveryN from './form-components/add-drug-components/add-drug-every-n/add-drug-every-n';
import AddDrugAsNeeded from './form-components/add-drug-components/add-drug-as-needed/add-drug-as-needed';
import AddDrugOddEven from './form-components/add-drug-components/add-drug-odd-even/add-drug-odd-even';
import AddDrugDateDurations from './form-components/add-drug-components/add-drug-date-durations/add-drug-date-durations';
import AddDrugEveryday from './form-components/add-drug-components/add-drug-everyday/add-drug-everyday';

const AddDrugTwo = ({ formMethods }) => {
  const { watch } = useFormContext();

  const frequencyTypes = [
    'Specific day(s)',
    'Every N days',
    'As needed',
    'Odd/Even calendar day',
    'Date duration(s)',
    'Everyday',
  ];
  const selectedFrequencyType = watch('frequency');
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

export default AddDrugTwo;
