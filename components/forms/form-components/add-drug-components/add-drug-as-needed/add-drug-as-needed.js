import React from 'react';
import { Grid } from '@material-ui/core';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';


const AddDrugAsNeeded = ({formMethods}) => {

    return (
        <Grid item container>
            <TimeSlot
                control={formMethods.control}
                name={`times`}
                rules={{required: true}}
                label={'Time and Quantity (Optional)'}
            />
            
        </Grid>
    )
}

export default AddDrugAsNeeded;
