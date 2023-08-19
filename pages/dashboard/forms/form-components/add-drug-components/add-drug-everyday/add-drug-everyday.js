import React from 'react';
import { Grid } from '@material-ui/core';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';


const AddDrugEveryday = ({ formMethods }) => {

    return (
        <Grid item container>
            <TimeSlot
                control={formMethods.control}
                name={`times`}
                rules={{}}
                label={`Time and Quantity`}
                shouldUnregister={true}
            />
        </Grid>
    )
}

export default AddDrugEveryday;