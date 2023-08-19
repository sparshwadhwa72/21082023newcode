import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { useFieldArray } from 'react-hook-form';

import DateInput from '../../date-picker/datepicker5';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot-left';
import '@fontsource/roboto';


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
        style={{
            
        }}>
            {fields.map((field, index) => (
                <Grid item key={field.id}
                spacing={10}
              >
                    <DateInput
                        control={formMethods.control}
                        name={`dosagePeriods.${index}.dateRange`}
                        rules={{}}
                        
                        shouldUnregister={true}
                    />
                </Grid>
            ))}
          
            <Grid container direction='row'>
                {fields.map((field, index) => (
                    <Grid item key={field.id}>
                        <TimeSlot
                            control={formMethods.control}
                            name={`dosagePeriods.${index}.times`}
                            rules={{}}
                            shouldUnregister={true}
                            label={`Dosage Period ${index + 1} (Time and Quantity)`}
                        />
                    </Grid>
                ))}

            </Grid>
        </Grid>   
    )
}

export default AddDrugDateDurations;