import React from 'react';
import { Grid } from '@material-ui/core';
import DateInput from '../../date-picker/Date-picker-disabled';
import DayIntervalInput from '../../day-interval-input/day-interval-input-disabled';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot-everyday';


const AddDrugEveryN = ({formMethods}) => {

    return (
        <Grid item container direction='column'>
            <br></br>
            <Grid item>
                <DateInput
                    control={formMethods.control}
                    name={`startDate`}
                    placeholder={`(i.e. 08/02/2021)`}
                    label={`Start date*`}
                    rules={{required: true}}
                    shouldUnregister={true}

                />
            </Grid>
            <br></br>
            <Grid item>
                <DayIntervalInput
                    name={`dayInterval`}
                    control={formMethods.control}
                    rules={{required: true}}
                    placeholder={` 1`}
                    shouldUnregister={true}
                />
            </Grid>
            <Grid item>
                <TimeSlot
                    control={formMethods.control}
                    name={`timeslots`}
                    rules={{required: true}}
                    shouldUnregister={true}
                    label={`Time and Quantity`}
                />
            </Grid>
        </Grid>
    )


}

export default AddDrugEveryN;