import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { useFieldArray } from 'react-hook-form';
import DateRangeInput from '../../daterange-picker/daterange-picker';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';


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
        <Grid item container>
            {fields.map((field, index) => (
                <Grid item key={field.id}>
                    <DateRangeInput
                        control={formMethods.control}
                        name={`dosagePeriods.${index}.dateRange`}
                        rules={{}}
                        shouldUnregister={true}
                    />
                </Grid>
            ))}
            <Grid item>
                <Button onClick={handleAddPeriod}>
                    + Add dosage period
                </Button>
            </Grid>
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