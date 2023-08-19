import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TimeslotBox from './timeslot-box';
import { Controller } from 'react-hook-form';

const AddDrugTimeslot = ({
    value,
    onChange,
    label
    }) => {
    const [times, setTimes] = useState(value);
    const [timePickerOpen, setTimePickerOpen] = useState(false);
    

    //Remove this
    const numDrugsPlaceholder = 6;

    useEffect(() => {
        onChange(times);

    }, [times]);

    const addTimeSlot = () => {
        setTimePickerOpen(true);
    }

    const handleAcceptTime = (time) => {
        setTimes(times => [...times, {'time': time, 'quantity': 0}]);
        setTimePickerOpen(false);
    }

    const handleQuantityChange = (time, quantity) => {
        let newTimes = times;
        for (const timing of newTimes) {
            if (timing['time'] === time) {
                timing['quantity'] = quantity;
            }
        }
        setTimes(newTimes);
    }


    return (
        <Grid container item direction='column'>
            <Grid item>
                <Typography variant='h2'>{label}</Typography>
                <Typography variant='h4'>Add the drug to an existing timeslot or create a new one</Typography>
            </Grid>
            <Grid item>
                <Button onClick={addTimeSlot}> Add time slot</Button>
            </Grid>
            <Grid item container direction='row'>
                <Grid item>
                    <div>Time</div>
                </Grid>
                <Grid item>
                    <div>Quantity</div>
                </Grid>
            </Grid>
            <Grid item container direction='column'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    {timePickerOpen && <TimePicker autoOk onChange={handleAcceptTime} open={timePickerOpen} ampm={true} variant='dialog'/>}
                </MuiPickersUtilsProvider>
                {times.map((time) => (
                    <Grid key={time['time']} item>
                        <TimeslotBox time={time['time']} numDrugs={numDrugsPlaceholder} onQuantityChange={handleQuantityChange}/>
                    </Grid>
                ))}
            </Grid>

        </Grid>
    )

}

const TimeSlot = ({
    control,
    name,
    rules,
    label,
    //additionalStyles,
    ...props
    }) => {

    return (
        <Grid container>
            <Controller
                control={control}
                name={name}
                rules={rules}
                defaultValue={[]}
                render={({ field }) => (
                    <AddDrugTimeslot
                        value={field.value}
                        onChange={field.onChange}
                        label={label}
                    />
                )}
            {...props}
            />
        </Grid>
    )
}

export default TimeSlot;