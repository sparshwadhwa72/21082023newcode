import React from 'react';
import { Grid } from '@material-ui/core';
import DateInput from '../../date-picker/datepicker4';
import DayIntervalInput from '../../day-interval-input/day-interval-input';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot';


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
          
        </Grid>
    )


}

export default AddDrugEveryN;