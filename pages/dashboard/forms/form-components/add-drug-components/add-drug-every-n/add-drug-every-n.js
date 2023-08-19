import React from 'react';
import { Grid } from '@material-ui/core';
import DateInput from '../../date-picker/date-picker';
import DayIntervalInput from '../../day-interval-input/day-interval-input';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';


const AddDrugEveryN = ({formMethods}) => {

    return (
        <Grid item container direction='column'>
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
            <Grid item>
                <DayIntervalInput
                    name={`dayInterval`}
                    control={formMethods.control}
                    rules={{required: true}}
                    placeholder={`(i.e. 3)`}
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